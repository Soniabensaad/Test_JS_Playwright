// Include playwright module
const { test, expect } = require('@playwright/test');

test.describe('Smoke testing', () =>{

    // Write a scenario test to check title
test('group tests', async ({ page }) => {

    console.log('Test is running');
    // Go to URL
    await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');

    // Assert that the URL is correct
    await (page).toHaveURL('https://www.google.com/search?q=playwright+by+testers+talk');

    // Assert that the title is correct
    await expect(page).toHaveTitle("playwright by testers talk - بحث Google‏");

    // Assert that the search field contains the correct text
    const searchInput = page.locator("[aria-label='بحث']").first();
    await expect(searchInput).toHaveText("playwright by testers talk");

    // assert editable enabled visible

    await expect( page.locator("[aria-label='بحث']") .first()).toBeEditable();
    await expect( page.locator("[aria-label='بحث']") .first()).toBeEnabled();

    await expect( page.locator("[aria-label='بحث']") .first()).toBeVisible();

    // disabled empty count

    //await expect( page.locator("[aria-label='بحث']") .first()).toBeDisabled();

   await expect( page.locator("[aria-label='بحث']") .first()).not.toBeEmpty();
   await expect( page.locator("[aria-label='بحث']")).toHaveCount(2);
    // Wait for a while to see the results (for debugging purposes)
    await page.waitForTimeout(7000);
});


test('group tests1', async ({ page }) => {

    console.log('Test is running');
    // Go to URL
    await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');

    // Assert that the URL is correct
    await (page).toHaveURL('https://www.google.com/search?q=playwright+by+testers+talk');

    // Assert that the title is correct
    await expect(page).toHaveTitle("playwright by testers talk - بحث Google‏");

    // Assert that the search field contains the correct text
    const searchInput = page.locator("[aria-label='بحث']").first();
    await expect(searchInput).toHaveText("playwright by testers talk");

    // assert editable enabled visible

    await expect( page.locator("[aria-label='بحث']") .first()).toBeEditable();
    await expect( page.locator("[aria-label='بحث']") .first()).toBeEnabled();

    await expect( page.locator("[aria-label='بحث']") .first()).toBeVisible();

    // disabled empty count

    //await expect( page.locator("[aria-label='بحث']") .first()).toBeDisabled();

   await expect( page.locator("[aria-label='بحث']") .first()).not.toBeEmpty();
   await expect( page.locator("[aria-label='بحث']")).toHaveCount(2);
    // Wait for a while to see the results (for debugging purposes)
    await page.waitForTimeout(7000);
});


})


test.describe('Sanity testing', () =>{

    // Write a scenario test to check title
test('group tests', async ({ page }) => {

    console.log('Test is running');
    // Go to URL
    await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');

    // Assert that the URL is correct
    await (page).toHaveURL('https://www.google.com/search?q=playwright+by+testers+talk');

    // Assert that the title is correct
    await expect(page).toHaveTitle("playwright by testers talk - بحث Google‏");

    // Assert that the search field contains the correct text
    const searchInput = page.locator("[aria-label='بحث']").first();
    await expect(searchInput).toHaveText("playwright by testers talk");

    // assert editable enabled visible

    await expect( page.locator("[aria-label='بحث']") .first()).toBeEditable();
    await expect( page.locator("[aria-label='بحث']") .first()).toBeEnabled();

    await expect( page.locator("[aria-label='بحث']") .first()).toBeVisible();

    // disabled empty count

    //await expect( page.locator("[aria-label='بحث']") .first()).toBeDisabled();

   await expect( page.locator("[aria-label='بحث']") .first()).not.toBeEmpty();
   await expect( page.locator("[aria-label='بحث']")).toHaveCount(2);
    // Wait for a while to see the results (for debugging purposes)
    await page.waitForTimeout(7000);
});


test('group tests1', async ({ page }) => {

    console.log('Test is running');
    // Go to URL
    await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');

    // Assert that the URL is correct
    await (page).toHaveURL('https://www.google.com/search?q=playwright+by+testers+talk');

    // Assert that the title is correct
    await expect(page).toHaveTitle("playwright by testers talk - بحث Google‏");

    // Assert that the search field contains the correct text
    const searchInput = page.locator("[aria-label='بحث']").first();
    await expect(searchInput).toHaveText("playwright by testers talk");

    // assert editable enabled visible

    await expect( page.locator("[aria-label='بحث']") .first()).toBeEditable();
    await expect( page.locator("[aria-label='بحث']") .first()).toBeEnabled();

    await expect( page.locator("[aria-label='بحث']") .first()).toBeVisible();

    // disabled empty count

    //await expect( page.locator("[aria-label='بحث']") .first()).toBeDisabled();

   await expect( page.locator("[aria-label='بحث']") .first()).not.toBeEmpty();
   await expect( page.locator("[aria-label='بحث']")).toHaveCount(2);
    // Wait for a while to see the results (for debugging purposes)
    await page.waitForTimeout(7000);
});


})
