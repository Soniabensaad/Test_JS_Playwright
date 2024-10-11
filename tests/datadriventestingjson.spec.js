// Include playwright module
const { test, expect } = require('@playwright/test');
import { Module1TesData } from '../test-data/qa/google.json';


for (const [key, value] of Object.entries(Module1TesData)){

    // Write a scenario test to check title
    test(`data driven testing using json playwright ${value}`, async ({ page }) => {
    // Go to URL
    await page.goto(process.env.URL);

    // search with keyword
    await page.locator('#APjFqb').fill(value)
    await page.locator('#APjFqb').press('Enter');


    
    await page.waitForTimeout(5000);

    
});
}
