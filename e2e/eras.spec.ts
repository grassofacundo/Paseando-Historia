import { expect, test } from "@playwright/test";

test.describe("eras", () => {
  test("disabled eras and choices cannot be used", async ({ page }) => {
    await page.goto("/eras");
    for (const name of ["Revolución industrial", "Segunda Guerra Mundial"]) {
      const card = page.getByRole("button", { name: new RegExp(name) });
      await expect(card).toBeDisabled();
      await expect(card).toContainText("Proximamente");
      await card.click({ force: true });
      await expect(page.getByRole("dialog")).toHaveCount(0);
    }

    await page.getByRole("button", { name: /Revolución de Mayo/ }).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    const soon = dialog.getByRole("button", { name: "Proximamente" });
    await expect(soon).toHaveCount(2);
    for (const b of await soon.all()) {
      await expect(b).toBeDisabled();
      await b.click({ force: true });
    }
    await expect(page).toHaveURL(/\/eras$/);
    await expect(dialog.getByRole("link", { name: "Comenzar" })).toHaveCount(1);
  });

  test("modal opens, closes on Escape and on outside click", async ({ page }) => {
    await page.goto("/eras");
    const card = page.getByRole("button", { name: /Revolución de Mayo/ });
    const dialog = page.getByRole("dialog");

    await card.click();
    await expect(dialog).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).toHaveCount(0);

    await card.click();
    await expect(dialog).toBeVisible();
    await page.mouse.click(3, 3);
    await expect(dialog).toHaveCount(0);
  });

  test("back arrow goes to the menu", async ({ page }) => {
    await page.goto("/eras");
    await page.getByRole("link", { name: "Volver" }).click();
    await expect(page).toHaveURL(/\/$/);
    await expect(page.getByRole("link", { name: "Tutorial" })).toBeVisible();
  });
});
