# 🧪 Test Plan – Swag Labs Automation

URL: [https://www.saucedemo.com/](https://www.saucedemo.com/)

---

## 1. Objective

This test plan defines the strategy, scope, and approach for validating the Swag Labs demo application. The goal is to verify key functionalities through automated testing using **Playwright** and **TypeScript**.

---

## 2. Scope of Testing

### In Scope:

- Login functionality with two user types (Standard User and Locked Out User)
- Product listing and filtering
- Cart operations (add/remove/view)
- Checkout process
- Error handling for invalid users

### Out of Scope:

- Payment gateway integration
- Database validation
- Performance or load testing
- API integration
- UI design validation beyond DOM structure

---

## 3. Types of Testing

- **Functional Testing**: Validate expected UI behavior
- **Integration Testing**: Verify interaction between frontend and backend (login, cart updates, and checkout)
- **Regression Testing**:  
  Swag Labs is a static demo site with no active development. Therefore, regression testing is not actively applied, although the test suite is prepared to support it in case of future changes.
- **Negative Testing**: Validate system response to invalid inputs or blocked users

---

## 4. Tools and Methodologies Used

- Playwright (automation framework)
- TypeScript (typed scripting)
- Node.js (runtime environment)
- Visual Studio Code (IDE)
- [Faker.js](https://fakerjs.dev/) (data generation library)
- CANDO-Test (structured testing methodology)

---

## 5. Test Environment

- URL: [https://www.saucedemo.com/](https://www.saucedemo.com/)
- Browser: Chromium - Firefox - webkit (via Playwright)
- Operating System: Windows 11

---

## 6. Entry Criteria

- Access to the test environment
- Available test data (valid users)
- Automated scripts implemented and reviewed

---

## 7. Exit Criteria

- All critical test cases pass
- No high-priority bugs remain open
- Test reports are generated and reviewed

---

## 8. Risk Analysis

| Risk                   | Mitigation Strategy                         |
| ---------------------- | ------------------------------------------- |
| UI changes on the site | Use modular and reusable selectors          |
| Test data reset        | Use fresh login for each test case          |
| Compatibility issues   | Leverage Playwright’s cross-browser support |

---

## 9. Deliverables

- Automated test scripts (`assessments/`)
- Test report (`playwright-report/`)
- Documentation:
    - `README.md`
    - `FRS.md`
    - `RTM.md`
    - `test-plan.md`
    - `test-cases.md`
    - `test-scenarios.md`
    - `test-execution.md`
