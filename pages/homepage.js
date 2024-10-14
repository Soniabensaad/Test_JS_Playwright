
const { test, expect } = require('@playwright/test');

class HomePage {
    constructor(page) {
        this.page = page;
        this.upgrade="//button[normalize-space()='Upgrade']";
        this.menu = "//span[@class='oxd-userdropdown-tab']";  // Corrected menu selector
        this.logoutoption = "//a[normalize-space()='Logout']";  // Corrected logout option selector
    }

    
    async verifyUpgrade()
        {
            await expect(this.page.locator(this.upgrade)).toBeVisible();
        }
    

    async logoutfromApplication() {
        await this.page.waitForSelector(this.menu);  // Wait for the menu to be visible
        await this.page.click(this.menu);  // Click on the user menu
        await this.page.waitForSelector(this.logoutoption);  // Wait for the logout option to be visible
        await this.page.click(this.logoutoption);  // Click on the logout option
    }
}

module.exports = HomePage;  // Export the HomePage class
