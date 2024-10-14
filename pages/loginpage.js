const { test, expect } = require('@playwright/test');


class LoginPage {
    constructor(page) {
        this.page = page;
        this.forgotpassword = "//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']";
        this.username = 'input[name="username"]';  // Corrected selector for username field
        this.password = 'input[name="password"]';  // Corrected selector for password field
        this.loginbutton = 'button[type="submit"]';  // Corrected selector for login button
    }

    async loginToApplication() {
        await this.page.waitForSelector(this.username);  // Wait for username field to be visible
        await this.page.fill(this.username, "Admin");  // Fill the username
        await this.page.fill(this.password, "admin123");  // Fill the password
        await this.page.click(this.loginbutton);  // Click the login button
        await this.page.waitForTimeout(3000);  // Optional: wait for the page to load or use proper wait condition
      
    }
    async verifysignIn()
    {
        await expect(this.page.locator(this.forgotpassword)).toBeVisible();
    }
}

module.exports = LoginPage;  // Export the page object
