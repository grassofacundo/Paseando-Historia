import { expect, test } from "@playwright/test";
import { arg1810 } from "../src/content/chapters/arg1810";
import { expectScreen, playScreens, startChapter } from "./helpers";

const MID = 10;
const card = (page: import("@playwright/test").Page) =>
  page.getByRole("button", { name: /Revolución de Mayo/ });
const pct = (index: number) => Math.round((index / arg1810.screens.length) * 100);

test("resumes a chapter in progress and shows the real percentage", async ({ page }) => {
  await page.goto("/eras");
  await expect(card(page)).toContainText("Completado 0%");

  await startChapter(page, "arg1810");
  await playScreens(page, arg1810, { from: 0, to: MID });
  await expectScreen(page, arg1810.screens[MID]);

  // Leave with the back arrow, then check the percentage.
  await page.getByRole("link", { name: "Volver" }).click();
  await expect(page).toHaveURL(/\/$/);
  await page.goto("/eras");
  await expect(card(page)).toContainText(`Completado ${pct(MID)}%`);

  // Re-enter: the same screen is shown.
  await startChapter(page, "arg1810");
  await expectScreen(page, arg1810.screens[MID]);

  // Progress keeps being saved from there.
  await playScreens(page, arg1810, { from: MID, to: MID + 3 });
  await expectScreen(page, arg1810.screens[MID + 3]);
  await page.goto("/eras");
  await expect(card(page)).toContainText(`Completado ${pct(MID + 3)}%`);
});
