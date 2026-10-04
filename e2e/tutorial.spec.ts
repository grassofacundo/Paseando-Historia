import { expect, test } from "@playwright/test";
import { intro } from "../src/content/chapters/intro";
import { expectScreen, playScreens } from "./helpers";

test("plays the tutorial start to finish, with wrong answers first", async ({ page }) => {
  await page.goto("/");
  const input = page.getByLabel("Decinos tu nombre:");
  await input.fill("Lucía");
  await input.press("Enter");
  await expect(page.getByText("¡Hola Lucía!")).toBeVisible();

  await page.getByRole("link", { name: "Tutorial" }).click();
  await expect(page).toHaveURL(/\/play\/intro$/);
  await page.getByRole("button", { name: "Comenzar" }).click();
  await expectScreen(page, intro.screens[0]);

  await playScreens(page, intro, { wrongFirst: true });

  await expect(page).toHaveURL(/\/finish\/intro$/);
  await expect(page.getByRole("heading", { name: "¡Felicitaciones Lucía!" })).toBeVisible();
  await expect(page.getByText("Conseguiste una parte de: Libro de historia")).toBeVisible();
  await expect(page.getByText(intro.reward.text, { exact: true })).toBeVisible();

  await page.getByRole("link", { name: "Elegir otra época" }).click();
  await expect(page).toHaveURL(/\/eras$/);

  // A completed chapter restarts from the first screen.
  await page.goto("/play/intro");
  await page.getByRole("button", { name: "Comenzar" }).click();
  await expectScreen(page, intro.screens[0]);
});
