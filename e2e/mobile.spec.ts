import { expect, test, type Page } from "@playwright/test";
import { intro } from "../src/content/chapters/intro";
import { playScreens, startChapter } from "./helpers";

test.use({ viewport: { width: 375, height: 667 } });

async function horizontalOverflow(page: Page): Promise<number> {
  return page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
}

test("tutorial on a phone viewport, without horizontal overflow", async ({ page }) => {
  await startChapter(page, "intro");
  await playScreens(page, intro, {
    onScreen: async () => {
      expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
    },
  });
  await expect(page).toHaveURL(/\/finish\/intro$/);
  await expect(page.getByRole("heading", { name: "¡Felicitaciones!" })).toBeVisible();
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});
