import { expect, test } from "@playwright/test";
import { arg1810 } from "../src/content/chapters/arg1810";
import { eraChoices } from "../src/content/eras";
import { expectScreen, playScreens } from "./helpers";

test("plays arg1810 from the eras page to 100%", async ({ page }) => {
  await page.goto("/eras");
  await page.getByRole("button", { name: /Revolución de Mayo/ }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText(eraChoices[0].text, { exact: true })).toBeVisible();
  await dialog.getByRole("link", { name: "Comenzar" }).click();
  await expect(page).toHaveURL(/\/play\/arg1810$/);
  await page.getByRole("button", { name: "Comenzar" }).click();
  await expectScreen(page, arg1810.screens[0]);

  const firstQuestion = arg1810.screens.findIndex((s) => s.type === "question");
  await playScreens(page, arg1810, { wrongFirst: (i) => i === firstQuestion });

  await expect(page).toHaveURL(/\/finish\/arg1810$/);
  // No username was set: no stray space before the exclamation mark.
  await expect(page.getByRole("heading", { name: "¡Felicitaciones!", exact: true })).toBeVisible();
  await expect(page.getByText("Conseguiste una parte de: Escarapela de 1810")).toBeVisible();
  await expect(page.getByText(arg1810.reward.text, { exact: true })).toBeVisible();

  await page.getByRole("link", { name: "Elegir otra época" }).click();
  await expect(page).toHaveURL(/\/eras$/);
  await expect(page.getByRole("button", { name: /Revolución de Mayo/ })).toContainText(
    "Completado 100%",
  );

  // A completed chapter restarts from the first screen.
  await page.goto("/play/arg1810");
  await page.getByRole("button", { name: "Comenzar" }).click();
  await expectScreen(page, arg1810.screens[0]);
});
