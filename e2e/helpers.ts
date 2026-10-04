import { expect, type Locator, type Page } from "@playwright/test";
import type { Chapter, Option, QuestionScreen, Screen } from "../src/content/types";

/** The dialogue box (a button) whose visible text is `text`. */
export function dialogueBox(page: Page, text: string): Locator {
  return page.getByRole("button", { name: text, exact: true });
}

export function optionButton(page: Page, text: string): Locator {
  return page.getByRole("button", { name: text, exact: true });
}

/** Opens the chapter from its URL and dismisses the "Comenzar" overlay. */
export async function startChapter(page: Page, chapterId: string): Promise<void> {
  await page.goto(`/play/${chapterId}`);
  await page.getByRole("button", { name: "Comenzar" }).click();
}

/** Asserts that `screen` is displayed (speaker tag plus text). */
export async function expectScreen(page: Page, screen: Screen): Promise<void> {
  if (screen.type === "question") {
    await expect(page.getByText(screen.text, { exact: true })).toBeVisible();
  } else {
    await expect(dialogueBox(page, screen.text)).toBeVisible();
  }
  if (screen.speaker.trim()) {
    await expect(page.getByText(screen.speaker.trim(), { exact: true })).toBeVisible();
  }
}

/** The question's 3 visible options: asserts the correct one is among them. */
async function visibleDistractors(page: Page, q: QuestionScreen): Promise<Option[]> {
  await expect(page.getByRole("button")).toHaveCount(3);
  await expect(optionButton(page, q.correct.text)).toHaveCount(1);
  const visible: Option[] = [];
  for (const d of q.distractors) {
    if ((await optionButton(page, d.text).count()) > 0) visible.push(d);
  }
  expect(visible).toHaveLength(2);
  return visible;
}

export type PlayOptions = {
  /** First screen index (inclusive); the page must already show it. Default 0. */
  from?: number;
  /** Last screen index (exclusive). Default: the whole chapter. */
  to?: number;
  /** Click a wrong option first (checking the teacher help) on questions. */
  wrongFirst?: boolean | ((screenIndex: number) => boolean);
  /** Called at every screen, e.g. for layout checks. */
  onScreen?: (screen: Screen, index: number) => Promise<void>;
};

/** Plays screens `from..to` of an already started chapter. */
export async function playScreens(page: Page, chapter: Chapter, opts: PlayOptions = {}): Promise<void> {
  const from = opts.from ?? 0;
  const to = opts.to ?? chapter.screens.length;
  for (let i = from; i < to; i++) {
    const screen = chapter.screens[i];
    await expectScreen(page, screen);
    await opts.onScreen?.(screen, i);
    if (screen.type === "dialogue") {
      await dialogueBox(page, screen.text).click();
      continue;
    }
    const wrong =
      typeof opts.wrongFirst === "function" ? opts.wrongFirst(i) : (opts.wrongFirst ?? false);
    if (wrong) {
      const [d] = await visibleDistractors(page, screen);
      await optionButton(page, d.text).click();
      // Teacher help: "Profe" tag, the distractor's help, box is a clickable button.
      await expect(page.getByText("Profe", { exact: true })).toBeVisible();
      await expect(page.getByRole("button")).toHaveCount(1);
      await expect(page.getByRole("button")).toHaveText(d.help);
      await page.getByRole("button", { name: d.help, exact: true }).click();
      // Same question again, with 3 options including the correct one.
      await expect(page.getByText(screen.text, { exact: true })).toBeVisible();
      await expect(page.getByRole("button")).toHaveCount(3);
      await expect(optionButton(page, screen.correct.text)).toHaveCount(1);
      await expect(page.getByText("Profe", { exact: true })).toHaveCount(0);
    } else {
      await expect(page.getByRole("button")).toHaveCount(3);
    }
    await optionButton(page, screen.correct.text).click();
    await expect(page.getByText("Profe", { exact: true })).toBeVisible();
    await expect(page.getByRole("button")).toHaveText(screen.correct.help);
    await page.getByRole("button", { name: screen.correct.help, exact: true }).click();
  }
}
