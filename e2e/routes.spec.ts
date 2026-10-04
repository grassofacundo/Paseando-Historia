import { expect, test } from "@playwright/test";
import { guerra } from "../src/content/chapters/guerra";
import { industrial } from "../src/content/chapters/industrial";
import { pueblo } from "../src/content/chapters/pueblo";
import { realista } from "../src/content/chapters/realista";
import { expectScreen, playScreens, startChapter } from "./helpers";

for (const chapter of [pueblo, realista, industrial, guerra]) {
  test(`plays ${chapter.id} to the finish page`, async ({ page }) => {
    await startChapter(page, chapter.id);
    await expectScreen(page, chapter.screens[0]);
    await playScreens(page, chapter, { wrongFirst: (i) => i % 5 === 0 });

    await expect(page).toHaveURL(new RegExp(`/finish/${chapter.id}$`));
    await expect(page.getByText(`Conseguiste una parte de: ${chapter.reward.name}`)).toBeVisible();
    await expect(page.getByText(chapter.reward.text, { exact: true })).toBeVisible();
  });
}
