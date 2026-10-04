import { expect, test } from "@playwright/test";

test.describe("username", () => {
  test("is set with Enter, persists, and can be changed on blur", async ({ page }) => {
    await page.goto("/");
    const input = page.getByLabel("Decinos tu nombre:");
    await input.fill("Ana");
    await input.press("Enter");

    await expect(page.getByText("¡Hola Ana!")).toBeVisible();
    await expect(page.getByLabel("¿No sos Ana? Cambiar nombre:")).toHaveValue("");

    await page.reload();
    await expect(page.getByText("¡Hola Ana!")).toBeVisible();
    await expect(page.getByLabel("¿No sos Ana? Cambiar nombre:")).toBeVisible();

    // Change it by blurring the input instead of pressing Enter.
    const changeInput = page.getByLabel("¿No sos Ana? Cambiar nombre:");
    await changeInput.fill("Beto");
    await changeInput.blur();
    await expect(page.getByText("¡Hola Beto!")).toBeVisible();
    await expect(page.getByLabel("¿No sos Beto? Cambiar nombre:")).toHaveValue("");

    await page.reload();
    await expect(page.getByText("¡Hola Beto!")).toBeVisible();
  });

  test("an empty submit is ignored", async ({ page }) => {
    await page.goto("/");
    const input = page.getByLabel("Decinos tu nombre:");
    await input.press("Enter");
    await input.fill("   ");
    await input.press("Enter");
    await expect(page.getByLabel("Decinos tu nombre:")).toBeVisible();
    await expect(page.getByText(/¡Hola/)).toHaveCount(0);
    expect(await page.evaluate(() => localStorage.getItem("ph.username"))).toBeNull();
  });
});
