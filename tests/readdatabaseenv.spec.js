// Include Playwright module
const { test, expect } = require('@playwright/test');
import { qaTestData } from '../test-data/qa/google.json';
import { stageTestData } from '../test-data/stage/google.json';

test.describe('Module Test', () => {

    let testData = null;
    test.beforeAll('Running before all tests ', () => {
        if (process.env.ENV == 'qa') {
            testData = qaTestData;
        } else {
            testData = stageTestData;
        }
    });

    // Write a scenario test to check title
    test('Read test data based on different env in Playwright', async ({ page }) => {
        // Go to URL
        await page.goto(process.env.URL);

        // Assuming testData has a property like 'searchTerm', use it for the search
        await page.locator('#APjFqb').fill(testData.searchTerm);  // Extract the search term string
        await page.locator('#APjFqb').press('Enter');

        await page.waitForTimeout(5000);
    });
});
