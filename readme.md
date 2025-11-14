# SauceDemo WebDriverIO Automation (Final Task)

## Overview
This project automates **UC-1, UC-2, UC-3** test cases on https://www.saucedemo.com/ using **WebDriverIO ** with the following requirements:

- **Tool**: WebDriverIO  
- **Browsers**: Chrome + Edge (parallel execution)  
- **Locators**: XPath only  
- **Pattern**: Page Object Model    
- **Logging**: WDIO native Logger + Allure Reporter  
- **Parametrization**: Data Provider   
- **Headless mode** for CI/CD readiness  

## Test Cases Covered

| ID  | Description |
|-----|-----------|
| UC-1 | Empty credentials → "Username is required" |
| UC-2 | Username filled, password empty → "Password is required" |
| UC-3 | Valid username + `secret_sauce` → Dashboard shows "Swag Labs" |

## Setup & Run

```bash
# 1. Clone & install
git clone <your-repo>
cd  repo name
npm install

# 2. Run tests in parallel (Chrome + Edge)
npm run wdio

# 3. Generate & open Allure report
allure generate [allure_output_dir] && allure open
