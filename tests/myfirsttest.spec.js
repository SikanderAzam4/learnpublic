const { test, expect } = require('@playwright/test');

test('Login demo test 3', async ({ page }) => {
    
    await page.goto('https://account.p.k2labs.org/log-in?alert=session_expired&return_url=https%3A%2F%2Fapp.p.k2labs.org%2Fen-US%2F');
    await page.locator('#user_email').click();
    await page.locator('#user_email').press('Control+a');
    await page.locator('#user_email').fill('arslan.ahmed+pariso@keeptruckin.com');
    await page.locator('#user_password').click();
    await page.locator('#user_password').press('Control+a');
    await page.locator('#user_password').fill('asdfgh');
    await page.getByRole('button', { name: 'Log in' }).click(); 
    await page.goto('https://app.p.k2labs.org/en-US/#/fleetview/map?entity_filters_drivers=false&entity_filters_vehicles=false&entity_filters_assets=false');
  
    await page.close();
});

