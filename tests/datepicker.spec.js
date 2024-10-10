// Include playwright module
const { test, expect } = require('@playwright/test');

test('date picker', async ({ page }) => {
    // Go to URL
    await page.goto('https://jqueryui.com/datepicker/');

    // Switch to the iframe that contains the date picker
    const frameElement = page.frameLocator('.demo-frame');

    // Fill in the date picker with a specific date
    await frameElement.locator('.hasDatepicker').fill('7/17/2024');
    await page.waitForTimeout(7000);
    // Click on today's date
    await frameElement.locator('.ui-datepicker-today > a').click();
    await page.waitForTimeout(7000);
    // Get today's date's data-date attribute
    const todayDateElement = await frameElement.locator('.ui-datepicker-today > a');
    const currentDateValue = await todayDateElement.getAttribute('data-date'); // Get the data-date attribute value
    await page.waitForTimeout(7000);
    // Calculate a custom date value
    const customDate = (parseInt(currentDateValue) - 3); // Example: 3 days earlier
    await page.waitForTimeout(7000);
    // Construct the selector for the custom date
    const elementSelector = `[data-date='${customDate}']`;
    
    // Click on the custom date
    await frameElement.locator(elementSelector).click();

    // Wait for a moment to see the result (for debugging purposes)
    await page.waitForTimeout(7000);
});
