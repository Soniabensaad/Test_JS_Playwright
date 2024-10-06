// Include playwright module
const { test, expect } = require('@playwright/test');

// Write a scenario test to check title
test('Validate Youtube title', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.youtube.com/');
    
    // Search with keywords
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('cypress by testers talk');
    
    await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
    await page.getByRole('button', { name: 'Search', exact: true }).click();
   

   
    // Click on playlist
    await page.getByRole('link', { name: 'Cypress by Testers Talk☑️' }).click();
    
    // Validate title
    await expect(page).toHaveTitle('Cypress Tutorial Full Course 2023 | Learn Cypress in 5 Hrs - YouTube');
});
