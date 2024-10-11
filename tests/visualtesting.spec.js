// Include playwright module
const { test, expect } = require('@playwright/test');

// Write a scenario test to check title
test('Visual comparaison testing ij  playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://github.com/login');
//before actions 2 images comparaison 
    await expect(page).toHaveScreenshot('githubpage.png');
    await page.locator('#login_field').click();
    await page.locator('#login_field').fill('testers talk');

//after actions 2 images comparaison
    await expect(page).toHaveScreenshot('githubpage.png');
    await page.waitForTimeout(3000);

});
