// Include Playwright module
const { test, expect } = require('@playwright/test');
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

 
const csvFilePath = path.join(__dirname, "../test-data/qa/testdata.csv");

// Attempt to parse the CSV file
let records;
try {
    records = parse(
        fs.readFileSync(csvFilePath),
        {
            columns: true, // Corrected 'colomn' to 'columns'
            skip_empty_lines: true,
        }
    );
    console.log("Parsed records:", records); // Log the parsed records for debugging
} catch (error) {
    console.error("Error reading the CSV file:", error);
    process.exit(1); // Exit if an error occurs
}

// Loop through each record from the CSV file
for (const record of records) {
    // Write a scenario test to check title
    test(`Data-driven testing using CSV in Playwright - TestCase: ${record.TestCaseId}`, async ({ page }) => {
        // Go to URL from environment variable
        await page.goto(process.env.URL);

        // Search with the keyword from the CSV data
        await page.locator('#APjFqb').fill(record.Skill1);
        await page.locator('#APjFqb').press('Enter');

        // Wait for search results to load
        await page.waitForTimeout(5000);
        
        // Optionally, you can add checks to validate the results here
    });
}
