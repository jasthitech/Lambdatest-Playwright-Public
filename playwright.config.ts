import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

const isLambdaTest = process.env.USE_LAMBDATEST === 'true';

const LT_COMMON = {
  user: process.env.LT_USERNAME,
  accessKey: process.env.LT_ACCESS_KEY,
  project: 'Playwright LambdaTest',
  build: 'Build 01',
  console: true,
  network: true,
  video: true,
  visual: true,
};

export default defineConfig({
  timeout: 60000,
  use: {
    headless: true,
  },
  projects: isLambdaTest
  ? [
      {
        name: 'LambdaTest Chrome on Windows 10',
        use: {
          browserName: 'chromium',
          connectOptions: {
            wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
              JSON.stringify({
                browserName: 'Chrome',
                browserVersion: 'latest',
                platform: 'Windows 10',
                'LT:Options': {
                  ...LT_COMMON,
                  name: 'Chrome on Windows 10',
                },
              })
            )}`,
          },
        },
      },
      {
        name: 'LambdaTest Chrome on macOS Catalina',
        use: {
          browserName: 'chromium',
          connectOptions: {
            wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
              JSON.stringify({
                browserName: 'Chrome',
                browserVersion: 'latest',
                platform: 'macOS Catalina',
                'LT:Options': {
                  ...LT_COMMON,
                  name: 'Chrome on macOS Catalina',
                },
              })
            )}`,
          },
        },
      },
    ]
    : [
        {
          name: 'Local Chromium',
          use: {
            browserName: 'chromium',
          },
        },
        {
          name: 'Local Firefox',
          use: {
            browserName: 'firefox',
          },
        },
        {
          name: 'Local WebKit',
          use: {
            browserName: 'webkit',
          },
        },
      ],
});
