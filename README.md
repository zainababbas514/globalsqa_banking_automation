# GlobalSQA Banking Cypress Automation

A Cypress-based test automation project for testing the **GlobalSQA Banking** application using JavaScript, Cucumber/BDD, and the Page Object Model (POM).

## 🧪 Project Overview

This project automates key banking workflows, including customer deposits, withdrawals, transaction history, manager customer management, adding customers, and opening accounts.

The framework uses Cucumber feature files for BDD scenarios, separate step definitions for customer and manager functionality, Page Objects for UI interactions, and reusable BasePage methods.

## 🛠️ Tech Stack

* **JavaScript**
* **Cypress**
* **Cucumber / BDD**
* **Page Object Model (POM)**
* **@badeball/cypress-cucumber-preprocessor**
* **esbuild**
* **multiple-cucumber-html-reporter**
* **Git / GitHub**

## 📋 Test Coverage

### Customer

* Customer login
* Valid and invalid deposits
* Deposit success message
* Account balance validation after deposit
* Withdrawals with sufficient and insufficient balance
* Withdrawal success and error messages
* Account balance validation after withdrawal
* Transaction history
* Transaction reset

### Manager

* Manager login
* Add a new customer
* Verify customer details
* Search customers using different criteria
* Delete an existing customer
* Open a new account
* Verify the generated account number

## ✨ Framework Features

* Page Object Model for maintainable test code
* Cucumber feature files for BDD scenarios
* Separate customer and manager step definitions
* Reusable BasePage methods
* Generic methods for clicking tabs and entering fields
* Assertions maintained in step definitions
* Cucumber Scenario Outlines
* Cucumber data tables
* Browser alert handling
* Automatic screenshots on failure
* Cypress video recording
* Cucumber JSON and HTML reporting
* npm scripts for common test execution and reporting tasks

## 📁 Project Structure

```text
PracticeTestAutomation
├─ cypress
│  ├─ e2e
│  │  ├─ features
│  │  │  ├─ customer
│  │  │  │  ├─ customer-deposit.feature
│  │  │  │  ├─ customer-transactions.feature
│  │  │  │  └─ customer-withdrawal.feature
│  │  │  │
│  │  │  └─ manager
│  │  │     ├─ manager-add-customer.feature
│  │  │     ├─ manager-customer-management.feature
│  │  │     └─ manager-open-account.feature
│  │  │
│  │  └─ step_definitions
│  │     ├─ commonSteps.js
│  │     ├─ customer
│  │     └─ manager
│  │
│  ├─ fixtures
│  ├─ pages
│  │  ├─ basePage.js
│  │  ├─ customerDashboard.js
│  │  ├─ login.js
│  │  ├─ managerDashboard.js
│  │  └─ transactionsPage.js
│  │
│  ├─ reports
│  ├─ screenshots
│  ├─ support
│  └─ videos
│
├─ testCases
│  └─ GlobalSQA_Banking_Test_Cases.xlsx
│
├─ .gitignore
├─ cypress.config.js
├─ generate-report.mjs
├─ package-lock.json
├─ package.json
└─ README.md
```

> Generated files such as `node_modules`, screenshots, videos, and reports are excluded from version control through `.gitignore`.

## 📊 Test Reporting

The project generates Cucumber JSON results and an HTML test report using `multiple-cucumber-html-reporter`.

The Cucumber JSON output is generated at:

```text
cypress/reports/cucumber-report.json
```

The HTML report is generated using:

```text
generate-report.mjs
```

Run the report generation command after executing the tests:

```bash
npm run report
```

## 📝 Manual Test Cases

Detailed manual test cases are maintained in:

```text
testCases/GlobalSQA_Banking_Test_Cases.xlsx
```

The Excel test cases cover the customer and manager banking workflows automated in this project.

## 🚀 Setup

### Clone the Repository

```bash
git clone <repository-url>
```

### Navigate to the Project

```bash
cd globalsqa_banking_automation
```

### Install Dependencies

```bash
npm install
```

## ▶️ NPM Scripts

The project includes the following npm scripts for running Cypress tests and generating reports.

| Command                           | Purpose                                                       |
| --------------------------------- | ------------------------------------------------------------- |
| `npm run cy:open`                 | Opens the Cypress Test Runner for interactive test execution. |
| `npm run cy:run`                  | Runs all Cypress tests in headless mode.                      |
| `npm run cy:run:spec -- "<path>"` | Runs a specific feature/spec file.                            |
| `npm run report`                  | Generates the HTML Cucumber report from the test results.     |

### Open Cypress

```bash
npm run cy:open
```

This opens the Cypress Test Runner, where individual feature files can be selected and executed interactively.

### Run All Tests

```bash
npm run cy:run
```

Runs all Cypress tests in headless mode.

The following command does the same thing:

```bash
npm test
```

### Run a Specific Feature

```bash
npm run cy:run:spec -- "cypress/e2e/features/customer/customer-deposit.feature"
```

For example:

```bash
npm run cy:run:spec -- "cypress/e2e/features/manager/manager-open-account.feature"
```

### Generate HTML Report

```bash
npm run report
```

This generates the HTML report using the Cucumber JSON results produced during test execution.

## 🌐 Application Under Test

**GlobalSQA Banking**

https://www.globalsqa.com/angularJs-protractor/BankingProject
