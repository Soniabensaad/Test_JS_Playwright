import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=github%2Flogin&oq=github%2Flogin&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg60gEIODQxMGowajKoAgCwAgE&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  await page.getByRole('link', { name: 'Sign in' }).click();
  await expect(page.getByRole('button', { name: 'Sign in', exact: true })).toBeVisible();
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill('kppp');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('oooooo');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
});
