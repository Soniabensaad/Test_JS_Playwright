// @ts-check
const { test, expect } = require('@playwright/test');

test('demo123', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
