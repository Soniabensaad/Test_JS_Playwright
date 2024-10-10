// Include playwright module
const { test, expect } = require('@playwright/test');

// Write a scenario test to check title
test('iframes drag and drop', async ({ page }) => {
    // Go to URL
    await page.goto('https://jqueryui.com/droppable/');

    
    //iframe
   const iframeElement = page.frameLocator('.demo-frame')

    //src and dest element
    const dragElement= iframeElement.locator('[id="draggable"]');
    const dropElement= iframeElement.locator('[id="droppable"]');

    //drag and drop
    await dragElement.dragTo(dropElement);
    await page.waitForTimeout(7000);
});
