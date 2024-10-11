// Include playwright module
const { test, expect } = require('@playwright/test');

const tesParameters = ['playwright by testers talk', 'Cypress by testers talk', 'API by testers talk'];

for (const searKeywords of tesParameters) {
// Write a scenario test to check title
test(`Parameterize a test ${searKeywords}`, async ({ page }) => {
    // Go to URL
    await page.goto('https://www.youtube.com/');
    
   // Search with keywords 
   await page.getByPlaceholder('Search').click();
   await page.getByPlaceholder('Search').fill(searKeywords);
   await page.getByPlaceholder('Search').press('Enter');


   await page.waitForTimeout(7000);
    
});
}
