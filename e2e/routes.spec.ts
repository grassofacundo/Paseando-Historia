import { expect, test } from "@playwright/test";
import { pueblo } from "../src/content/chapters/pueblo";
import { realista } from "../src/content/chapters/realista";
import { expectScreen, playScreens, startChapter } from "./helpers";

for (const chapter of [pueblo, realista]) {
  test(`plays ${chapter.id} to the finish page`, async ({ page }) => {
    await startChapter(page, chapter.id);
    await expectScreen(page, chapter.screens[0]);
    await playScreens(page, chapter, { wrongFirst: (i) => i % 5 === 0 });

    await expect(page).toHaveURL(new RegExp(`/finish/${chapter.id}$`));
    await expect(page.getByText("Conseguiste una parte de: Escarapela de 1810")).toBeVisible();
    await expect(page.getByText(chapter.reward.text, { exact: true })).toBeVisible();
  });
}
