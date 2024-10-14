const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginpage');  // Import the LoginPage class
const HomePage = require('../pages/homepage');  // Import the HomePage class

// Test case to validate login to OrangeHRM application
test('Validate OrangeHRM login and logout', async ({ page }) => {
    // Go to the login page of OrangeHRM
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Create an instance of the LoginPage class
    const loginPage = new LoginPage(page);

    // Call the login method to perform the login
    await loginPage.loginToApplication();

    // Create an instance of the HomePage class
    const homePage = new HomePage(page);

    await homePage.verifyUpgrade();

    // Call the logout method to perform logout
    await homePage.logoutfromApplication();
    await loginPage.verifysignIn();

});
