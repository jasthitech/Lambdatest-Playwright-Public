import { test, expect } from '@playwright/test';

test('Scenario 2: Drag slider "Default value 15" to 95 and validate', async ({ page }) => {
  // Step 1: Open LambdaTest Selenium Playground
  await page.goto('https://www.lambdatest.com/selenium-playground');

  // Step 2: Click on "Drag & Drop Sliders"
  await page.click('a[href="https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo"]');

  // Step 3: Locate the slider labeled "Default value 15"
  const sliderLabel = page.locator("//h4[normalize-space(text())='Default value 15']");
  await expect(sliderLabel).toBeVisible();

  // Step 4: Get the slider associated with that label      (//input[@type='range'])[3]
  const slider = page.locator("(//input[@type='range'])[3]");
  const valueDisplay = page.locator('#rangeSuccess'); // ID for the displayed value (for the first slider)

  // Step 5: Drag the slider until the value becomes 95
  let currentValue = await valueDisplay.textContent();
  while (currentValue !== '95') {
    await slider.press('ArrowRight');
    currentValue = await valueDisplay.textContent();
  }

  // Step 6: Validate the final value is 95
  await expect(valueDisplay).toHaveText('95');
});
