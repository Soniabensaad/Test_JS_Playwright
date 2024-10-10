// Include playwright module
const { test, expect } = require('@playwright/test');

// Write a scenario test to check title
test('mouse action', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com/search?q=testers+talk&sca_esv=247a3cc0ba513c42&source=hp&ei=Ze0GZ6nzAbmL7NYPsMaY8AI&iflsig=AL9hbdgAAAAAZwb7deFA27g5z4a3wQYj2piOooWr3Rpm&ved=0ahUKEwjpueuel4KJAxW5BdsEHTAjBi4Q4dUDCA0&uact=5&oq=testers+talk&gs_lp=Egdnd3Mtd2l6Igx0ZXN0ZXJzIHRhbGsyBxAAGIAEGBMyChAAGBMYFhgKGB4yCBAAGBMYFhgeMggQABgTGBYYHjIIEAAYExgWGB4yCBAAGBMYFhgeMggQABgTGBYYHjIKEAAYExgWGB4YD0iDI1AAWMcfcAB4AJABAJgBowKgAb8OqgEGMC4xMC4yuAEDyAEA-AEBmAIMoAL5DsICCxAAGIAEGLEDGIMBwgIFEAAYgATCAhEQLhiABBixAxjRAxiDARjHAcICBBAAGAPCAg4QLhiABBixAxjHARivAcICDhAuGIAEGLEDGNEDGMcBwgIIEAAYgAQYsQPCAgsQLhiABBixAxiDAcICBxAAGIAEGArCAgQQABgewgIGEAAYChgewgIIEAAYChgeGA_CAgYQABgeGA_CAgcQABiABBgNmAMAkgcGMC4xMC4yoAepUg&sclient=gws-wiz');

    //click
    //await page.getByRole('link', {name: 'Testers Talk'}).first().click();

    //double click
    //await page.getByRole('link', {name: 'Testers Talk'}).first().dblclick();


    //mouse right click
    await page.getByRole('link', {name: 'Testers Talk'}).first().click({button: 'right'});

    //mouse middle click
    await page.getByRole('link', {name: 'Testers Talk'}).first().click({button: 'middle'}); // another tab
    //mouse left click
    await p//age.getByRole('link', {name: 'Testers Talk'}).first().click({button: 'left'});
    //mouse hover
    await page.locator("  ([aria-label='Utiliser la recherche vocale']");
    
    await page.waitForTimeout(7000);
});
