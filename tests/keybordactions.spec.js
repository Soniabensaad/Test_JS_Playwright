const { test, expect } = require('@playwright/test');

test('keyboard actions', async ({ page }) => {
    // Go to Google
    await page.goto('https://www.google.com/');

    // Wait for the search input to appear and click on it
    await page.locator("[aria-label='بحث']").first().click();

    // Type the search term using the correct method
    await page.locator("[aria-label='بحث']").first().fill('playwright by testers talk');

    // Press Enter to submit the search
    await page.locator("[aria-label='بحث']").first().press('Enter');

    // Wait for a bit to ensure results load
    await page.waitForTimeout(2000);

    // Select all text using Control+A and delete it
    await page.locator("[aria-label='بحث']").first().click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Delete');

    // Press Tab to move to the next element (could be another input or button)
    await page.keyboard.press('Tab');

    // Optionally wait for a bit to observe the behavior (you can adjust or remove this)
    await page.waitForTimeout(7000);
});
