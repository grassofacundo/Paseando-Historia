import { defineConfig, devices } from "@playwright/test";

const PORT = 4400;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "e2e",
  testMatch: "**/*.spec.ts",
  testIgnore: ["tests/unit/**"],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["list"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL,
    // The service worker would serve cached pages between tests.
    serviceWorkers: "block",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        // Set PW_CHANNEL=msedge to use the installed Microsoft Edge when the
        // bundled Chromium cannot be downloaded.
        channel: process.env.PW_CHANNEL || undefined,
      },
    },
  ],
  // Serves the already-built static export (run `npm run build` first).
  webServer: {
    command: `npx serve out -l ${PORT} --no-clipboard`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
