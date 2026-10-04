import { expect, test } from "@playwright/test";

test.describe("eras", () => {
  test("each era opens its own modal with its choices", async ({ page }) => {
    await page.goto("/eras");
    const expected = [
      { era: /Revolución de Mayo/, title: "Revolución de Mayo", links: 3 },
      { era: /Revolución industrial/, title: "Revolución industrial", links: 1 },
      { era: /Segunda Guerra Mundial/, title: "Segunda Guerra Mundial", links: 1 },
    ];
    for (const { era, title, links } of expected) {
      const card = page.getByRole("button", { name: era });
      await expect(card).toBeEnabled();
      await card.click();
      const dialog = page.getByRole("dialog");
      await expect(dialog.getByRole("heading", { name: title })).toBeVisible();
      await expect(dialog.getByRole("link", { name: "Comenzar" })).toHaveCount(links);
      await page.keyboard.press("Escape");
      await expect(dialog).toHaveCount(0);
    }
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
