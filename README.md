# Playwright Demoblaze Automation

End-to-End UI Automation Framework using Playwright and JavaScript.

[![Playwright Tests](https://github.com/KS6000/Playwright-demoblaze-Automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/KS6000/Playwright-demoblaze-Automation/actions/workflows/playwright.yml)

## Project Overview

This project automates key user journeys on the Demoblaze e-commerce website using Playwright.

The framework demonstrates modern UI automation practices including:

- Playwright Test Runner
- JavaScript
- Environment Variables (.env)
- Assertions
- Locator Strategies
- End-to-End Testing
- Screenshot Evidence Collection

## CI/CD Pipeline

This project uses GitHub Actions to automatically execute Playwright tests on every push to the repository.

[![Playwright Tests](https://github.com/KS6000/Playwright-demoblaze-Automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/KS6000/Playwright-demoblaze-Automation/actions/workflows/playwright.yml)

### Pipeline Features

- GitHub Actions
- Playwright
- Chromium Browser
- Secure GitHub Secrets
- Automated Test Execution
- Playwright Report Artifacts
- CI/CD Pipeline (GitHub Actions)

## Application Under Test

Website:
https://www.demoblaze.com/

## Technology Stack

- Playwright
- JavaScript
- Node.js
- Git
- GitHub

## Test Scenarios Covered

| Test Case ID | Scenario | Status |
|-------------|-----------|---------|
| TC001 | Valid Login | Passed |
| TC002 | Invalid Login | Passed |
| TC003 | Add Product To Cart | Passed |
| TC004 | Remove Product From Cart | Passed |
| TC005 | Place Order | Passed |
| TC006 | Logout | Passed |

## Project Structure

```text
Playwright-demoblaze-Automation
│
├── tests
│   └── login.spec.js
│
├── demoblaze UI Automation images
│
├── .github
│   └── workflows
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Installation

Clone the repository:

```bash
git clone https://github.com/KS6000/Playwright-demoblaze-Automation.git
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Execute Tests

Run all tests:

```bash
npx playwright test
```

Run UI Mode:

```bash
npx playwright test --ui
```

## Test Evidence

The repository includes execution screenshots for:

- TC001 Valid Login
- TC002 Invalid Login
- TC003 Add Product To Cart
- TC004 Remove Product From Cart
- TC005 Place Order
- TC006 Logout

### Complete Test Suite Execution

All automated test cases passed successfully.

File:

```text
Playwright_Test_Suite_All_Tests_Passed.png
```

## Key Features

- End-to-End UI Automation
- Playwright Test Runner
- Assertion Validation
- Environment Variable Support
- Modular Framework Structure
- Screenshot Evidence
- GitHub Version Control

## Author

Krishan S

ISTQB Certified Tester

Automation Testing Portfolio Project
