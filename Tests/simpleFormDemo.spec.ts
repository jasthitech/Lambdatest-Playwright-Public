import { test, expect } from '@playwright/test';

test('Simple Form Demo test - Validate message display', async ({ page }) => {
  // Step 1: Open LambdaTest’s Selenium Playground
  await page.goto('https://www.lambdatest.com/selenium-playground');

  // Step 2: Click “Simple Form Demo”
  await page.click('text=Simple Form Demo');

  // Step 3: Validate that the URL contains “simple-form-demo”
  await expect(page).toHaveURL(/.*simple-form-demo/);

  // Step 4: Create a variable for a string value
  const testMessage = 'Welcome to LambdaTest';

  // Step 5: Enter the value in the “Enter Message” text box
  await page.fill('#user-message', testMessage);

  // Step 6: Click “Get Checked Value”
  await page.click('#showInput');

  // Step 7: Validate the same message is displayed under “Your Message:”
  const outputLocator = page.locator('#message');
  await expect(outputLocator).toHaveText(testMessage);
});
