import * as dotenv from 'dotenv';
dotenv.config();

export const capabilities = {
  browserName: 'Chrome',
  browserVersion: 'latest',
  platform: 'Windows 10',
  'LT:Options': {
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
    project: 'Playwright LambdaTest',
    build: 'Build 01',
    name: 'LambdaTest via npx',
    console: true,
    network: true,
    video: true,
    visual: true,
  }
};
