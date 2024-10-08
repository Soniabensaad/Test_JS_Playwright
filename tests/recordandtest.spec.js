import { test, expect } from '@playwright/test';

test('Record and play test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=youtube&oq=youtube&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDY1ODdqMGoyqAIAsAIA&sourceid=chrome&ie=UTF-8');
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'YouTube YouTube https://www.' }).click();
  
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('api testing by testers ');
  await page.getByText('api testing by testers talk').click();
  await expect(page.locator('#search-form #container')).toBeVisible();
  await page.getByText('Connect to the internet You\'').click();
  await page.locator('ytd-playlist-renderer').filter({ hasText: 'videos Now playing API Testing by Testers Talk☑️ Testers Talk · Playlist' }).locator('#thumbnail').click();
  await page.locator('video').click();
  await page.locator('video').click();
  await page.locator('video').click();
  await page.waitForTimeout(3000);
  await expect(page.getByRole('link', { name: 'API Testing by Testers Talk☑️' })).toBeVisible();
});
