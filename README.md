# LambdaTest Playwright

This repository contains the solution to the LambdaTest assignment using Playwright and TypeScript.

## Prerequisites

- A valid LambdaTest username and access key.
- Node.js and npm are already preinstalled on Gitpod.

## Running Tests on Gitpod

1. Click this button to launch Gitpod:  
   [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/jasthitech/lambdatest-Playwright-Public)

2. On first load, Gitpod will:
   - Install dependencies
   - Install Playwright browsers
   - Automatically run the test suite

3. If needed, rerun tests using:

```bash
npx playwright test

##**********************************************Step-By-Step*********************************************************************************
**1️⃣ Initialize the Project**
mkdir playwright-ts-tests
cd playwright-ts-tests
npm init -y

**2️⃣ Install Playwright with TypeScript Support**
npm install -D @playwright/test typescript ts-node
npx playwright install

    This installs:
    Playwright Test Runner
    TypeScript compiler
    ts-node for running .ts files without compiling manually

**3️⃣ Set Up TypeScript Configuration**
npx tsc --init

   Now edit tsconfig.json to suit Playwright:
   {
  "compilerOptions": {
    "target": "ESNext",
    "module": "CommonJS",
    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "outDir": "dist",
    "sourceMap": true,
    "resolveJsonModule": true,
    "types": ["@playwright/test"],
    "skipLibCheck": true
  },
  "include": ["tests/**/*.ts"]
}

**4️⃣ Create Project Structure**
mkdir -p tests/utils
mkdir -p tests/pages

You might organize it like:

playwright-ts-tests/
├── tests/
│   ├── example.spec.ts
│   ├── pages/
│   └── utils/
├── tsconfig.json
└── package.json

**5️⃣ Add Sample Test**
Create a basic test at tests/example.spec.ts:
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = await page.title();
  expect(title).toContain('Playwright');
});

**6️⃣ Run the Test**
npx playwright test
Note: You’ll see Playwright automatically discover and run your .spec.ts files.

**7️⃣ Enable Playwright Test Codegen (Optional, for Scaffolding)**
npx playwright codegen https://example.com
Note: This opens a GUI for recording steps, which auto-generates code.

**✅ You're Set!**
You now have a TypeScript-powered Playwright project ready to scale.
To add reporting, cross-browser testing, CI integration, or advanced page objects — continue building from this solid base.



