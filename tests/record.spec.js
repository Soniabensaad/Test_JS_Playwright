import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=github&oq=github&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDI5NThqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'GitHub: Let\'s build from here' }).click();
  await page.goto('https://github.com/login');
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill('kdkdkd');
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill('kdkdkdkddkd');
  await page.getByLabel('Username or email address').click();
  await page.getByText('Password Forgot password?').click();
  await page.getByLabel('Password').fill('ldldld');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByText('Incorrect username or').click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});
