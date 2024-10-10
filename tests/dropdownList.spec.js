// Include playwright module
const { test, expect } = require('@playwright/test');

// Write a scenario test to check title
test('Handle dropdown list in playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.facebook.com/');
    
    await page.getByText('Create new account').click();
    const dropDownList = await page.locator('#mounth');
    await expect(dropDownList).toHaveValue('10');
    dropDownList.selectOption('5');
    dropDownList.selectOption('7');
    dropDownList.selectOption('Oct');

    await page.waitForTimeout(5000);

    
});
