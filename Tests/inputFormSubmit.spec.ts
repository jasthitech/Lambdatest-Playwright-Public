import { test, expect } from '@playwright/test';

test('Input Form Submit - Validate error and successful submission', async ({ page }) => {
  // Step 1: Navigate to Selenium Playground
  await page.goto('https://www.lambdatest.com/selenium-playground');

  // Step 2: Click on "Input Form Submit"
  await page.click('text=Input Form Submit');

  // Step 3: Click Submit without entering data
  await page.click("(//button[@type='submit'])[2]");

  // Step 4: Assert error validation message is shown
  // const errorMessage = await page.locator('small:visible').first();
  // await expect(errorMessage).toBeVisible();
  // await expect(errorMessage).toHaveText(/please fill/i);
  //*********************************************************************
      // Step 4: Get the first required input element (like "Name")
      const nameInput = page.locator('input[name="name"]');

      // Step 5: Capture the browser-native validation message
      const validationMessage = await nameInput.evaluate((el) => {
        const input = el as HTMLInputElement;
        return input.validationMessage;
      });

      // Step 6: Assert the validation message contains expected text
      console.log("Retrived blank for submit error message is: "+ validationMessage);
      //expect(validationMessage).toMatch(/Please fill out this field./i); // This is browser-dependent wording
      expect(['Please fill out this field.', 'Please fill in this field.']).toContain(validationMessage);
  //**********************************************************************

  // Step 5: Fill all fields
  await page.fill("//input[@placeholder='Name']", 'John Doe');
  await page.fill("//input[@placeholder='Email']", 'john@example.com');
  await page.fill("//input[@placeholder='Password']", 'SecurePass123!');
  await page.fill("//input[@placeholder='Company']", 'LambdaTest Inc.');
  await page.fill("//input[@placeholder='Website']", 'https://example.com');
  await page.selectOption('select[name="country"]', { label: 'United States' });
  await page.fill("//input[@placeholder='City']", 'New York');
  await page.fill("//input[@placeholder='Address 1']", '1234 Elm Street');
  await page.fill("//input[@placeholder='Address 2']", 'Suite 100');
  await page.fill("//input[@placeholder='State']", 'NY');
  await page.fill("//input[@placeholder='Zip code']", '10001');

  // Step 6: Submit the form
  await page.click("(//button[@type='submit'])[2]");

  // Step 7: Validate the success message
  const successMsg = page.locator("//p[@class='success-msg hidden']");
  await expect(successMsg).toHaveText(
    'Thanks for contacting us, we will get back to you shortly.'
  );
});
