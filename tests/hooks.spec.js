// Include playwright module
const { test, expect } = require('@playwright/test');

//beforeEach hooks
test.beforeEach('Run before each test', async ({ page }) => {
    console.log('Running before each test...!')
    // Go to URL
    await page.goto('https://www.youtube.com/'); // Corrected the URL
});

//beforeAll hooks
test.beforeAll('Run before all tests', async () => {
    console.log('Running before all tests...!')
    
});

//aftereach hooks
test.afterEach('Run after each tests', async () => {
    console.log('Running after each tests...!')
    
});


//aftereach hooks
test.afterAll('Run after all tests', async () => {
    console.log('Running after all tests...!')
    
});
// Write a scenario test to check title
test('Hooks in Playwright', async ({ page }) => {
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

test('Hooks in Playwright2', async ({ page }) => {
    // Search with keywords
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('api testing by testers talk');
    
    await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
    await page.getByRole('button', { name: 'Search', exact: true }).click();

   await page.waitForTimeout(5000);
});
