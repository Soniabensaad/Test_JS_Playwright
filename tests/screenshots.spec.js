// Include playwright module
const { test, expect } = require('@playwright/test');

// Write a scenario test to check title
test('take a screen shot on playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.youtube.com/results?search_query=testers+talk');


    // element screenshot
    //await page.locator('#dismissible.style-scope ytd-shelf-renderer').screenshot({path:'./screenshots/element.png'});
    //page screenshot
    await page.screenshot({path:'./screenshots/page.png'});

    // full page screenshot
    await page.screenshot({path:'./screenshots/fullpage.png', fullPage: true});


    await page.waitForTimeout(7000);
   
});
