# Demoblaze Cypress Automation Framework

## Project Overview
This project contains automated tests for the **Demoblaze website** using **Cypress**.  
It follows the **Page Object Model (POM)** structure to ensure **reusability, maintainability, and scalability**.

## Test-Driven Development (TDD) 

This project follows TDD practices:

1. Write a failing test first
2. Implement minimum code to pass the test
3. Refactor for reusability
4. Repeat for new features

---

## Project Structure
/cypress
/e2e → Test files
/pages → Page Objects (locators + methods)
/fixtures → Test data in JSON format
/support → Custom commands & utility functions
/Reports → Generated test reports
cypress.config.js → Cypress configuration file
package.json → Project dependencies and scripts
README.md → Project documentation

## Setup Instructions

1. Clone repository: git clone <repo-url>
2. Install dependencies: npm install
3. Open Cypress GUI: npx cypress open
4. Run all tests headless: npx cypress run
5. Run a specific test: npx cypress run --spec "cypress/e2e/signupTest.cy.js"

## Page Object Model (POM)

Locators and reusable methods in /cypress/pages
Tests only call page methods

## Reports

Generated in /Reports
Formats: Allure
Include test steps, status, and screenshots

## Best Practices

1. Use reusable methods in Page Objects
2. Avoid unnecessary cy.wait(), rely on Cypress auto-wait
3. Naming: Page Object files → PascalCase, Methods/Variables → camelCase
4. Keep test data in /fixtures
5. Maintain a CHANGELOG.md for updates

## Contact

Maintainer: Jafar

Email: jsaleem@paktolus.com
