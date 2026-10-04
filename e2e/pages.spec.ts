import { expect, test } from "@playwright/test";

test("about page", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByRole("heading", { name: "Sobre el proyecto" })).toBeVisible();
  await expect(page.getByText("Desarrollado por Facundo Grasso, año 2018")).toBeVisible();
  await expect(
    page.getByText("Cursando desarrollo de software 2do año. Escuela Urquiza"),
  ).toBeVisible();
  await expect(page.locator("body")).not.toContainText("MIT");
  await expect(page.locator("body")).not.toContainText("Blackrock");
  await page.getByRole("link", { name: "Volver" }).click();
  await expect(page).toHaveURL(/\/$/);
});

test("unknown routes show the 404 screen", async ({ page }) => {
  await page.goto("/nope");
  await expect(page.getByText("Raúl 404", { exact: true })).toBeVisible();
  await expect(page.getByText("Nos quedamos sin diálogos")).toBeVisible();
  await page.getByRole("link", { name: "Volver al inicio" }).click();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole("link", { name: "Tutorial" })).toBeVisible();
});

test("an unknown chapter shows the 404 screen", async ({ page }) => {
  await page.goto("/play/nope");
  await expect(page.getByText("Nos quedamos sin diálogos")).toBeVisible();
});
