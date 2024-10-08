// @ts-check
const { test, expect } = require('@playwright/test');

test('Locators', async ({ page }) => {

  //by role
  //goto url
  await page.goto('https://www.google.com/search?sca_esv=a68d2f8b7b299017&rlz=1C1VDKB_frTN1051TN1051&q=cypress+by+testers+talk&source=lnms&fbs=AEQNm0CbCVgAZ5mWEJDg6aoPVcBgTlosgQSuzBMlnAdio07UCCJug3WzoI_0_7bcYmDUufyiZo0OmOGEiyRGYAdeCNb_HyDEfqlSaP-lwX4TI4XK5zSdh3PwStLrx1bwsCEiIfaRughLOr4inpoQQ0J1aCHcb5J0Eg3mjEPPJ1Em93G5eN198Ng&sa=X&ved=2ahUKEwiRkNaB0v-IAxWh-AIHHeFpOLYQ0pQJegQIChAB&biw=770&bih=730&dpr=1.25');

  await page.getByRole('link', {name: 'صور'}).click();
  await page.waitForTimeout(7000);




});

test('Locators2', async ({ page }) => {

  //by role
  //goto url
  await page.goto('https://www.google.com/search?sca_esv=a68d2f8b7b299017&rlz=1C1VDKB_frTN1051TN1051&q=cypress+by+testers+talk&source=lnms&fbs=AEQNm0CbCVgAZ5mWEJDg6aoPVcBgTlosgQSuzBMlnAdio07UCCJug3WzoI_0_7bcYmDUufyiZo0OmOGEiyRGYAdeCNb_HyDEfqlSaP-lwX4TI4XK5zSdh3PwStLrx1bwsCEiIfaRughLOr4inpoQQ0J1aCHcb5J0Eg3mjEPPJ1Em93G5eN198Ng&sa=X&ved=2ahUKEwiRkNaB0v-IAxWh-AIHHeFpOLYQ0pQJegQIChAB&biw=770&bih=730&dpr=1.25');

  await page.getByRole('link', {name: 'فيديوهات'}).click();
  await page.waitForTimeout(7000);



});


test('Locators3', async ({ page }) => {

  //by Label
  //goto url

  await page.getByLabel('https://www.google.com/?hl=ar');
  await page.getByLabel('بحث', {exact:true}).fill('api testing by testers talk');
  await page.getByLabel('بحث', {exact:true}).press('Enter');
  await page.waitForTimeout(7000);




});

test('Locators4', async ({ page }) => {

  //by Alt text
  //goto url

  await page.goto('https://github.com/BakkappaN');
  await page.getByAltText("View BakkappaN's full-sized avatar");
  await page.waitForTimeout(7000);


});

test('Locators5', async ({ page }) => {

  //by TestId
  //goto url

  await page.goto('https://github.com/login');
  await page.getByTestId("username").fill('testers talk');
  await page.waitForTimeout(7000);


});
test('Locators6', async ({ page }) => {

  //by Text
  //goto url

  await page.goto('https://www.youtube.com/results?search_query=testers+talk');
  await page.getByText("API Testing by Testers Talk☑️").click;
  await page.waitForTimeout(7000);


});
test('Locators7', async ({ page }) => {

  //by Title
  //goto url

  await page.goto('https://www.youtube.com/results?search_query=testers+talk');
  await page.getByTitle("API Testing by Testers Talk☑️ ").click;
  await page.waitForTimeout(7000);


});

test('Locators8', async ({ page }) => {

  //by xpath
  //goto url

  await page.goto('https://www.youtube.com/');
  await page.locator("xpath=//*[@name='search_query']").click();
  await page.locator("xpath=//*[@name='search_query']").fill('javascript by testers talk');
  await page.locator("xpath=//*[@name='search_query']").press('Enter');

  await page.waitForTimeout(7000);


});

test('Locators9', async ({ page }) => {

  //by Css selector
  //goto url

  await page.goto('https://www.youtube.com/');
  await page.locator("css=[name='search_query']").click();
  await page.locator("css=[name='search_query']").fill('javascript by testers talk');
  await page.locator("css=[name='search_query']").press('Enter');

  await page.waitForTimeout(7000);


});
