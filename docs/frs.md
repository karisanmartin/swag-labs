# 🧾 Functional Requirements Specification – Swag Labs

---

## 1. Project Overview

Swag Labs is a demo e-commerce web application designed to simulate user interactions such as login, product browsing, cart management, and checkout. It is primarily used for automation testing and QA workflow simulations.

---

## 2. Functional Scope

The system must support the following functionalities:

- Login with predefined credentials
- Product listing and filtering
- Add/remove products from the cart
- View cart contents
- Complete the checkout process
- Handle errors for blocked or problematic users

---

## 3. User Roles

- **Standard User**: Full access to all functionalities
- **Locked Out User**: Restricted access (login fails)
- **Problem User**: UI inconsistencies
- **Performance Glitch User**: Simulated slow response
- **Error User**: Simulated backend errors
- **Visual User**: Simulated visual bugs

---

## 4. Business Rules

- All users use the same password: `secret_sauce`
- Only valid usernames can access the system
- Cart contents must persist until checkout or logout
- Checkout requires an active user session

---

## 5. Use Cases

This document outlines the functional use cases derived from the system requirements and validated through test scenarios and test cases.

---

## 🧩 FRS01 – Login Functionality

**Use Case:** User logs into the system with valid or invalid credentials  
**Actors:** End user  
**Preconditions:** User is on the login page  
**Main Flow:**

1. User enters valid credentials
2. System authenticates and redirects to product page

**Alternative Flows:**

- Missing username → error message
- Missing password → error message
- Both fields empty → error message
- Locked out user → error message

**Related TS:** TS01, TS02  
**Related TC:** TC01–TC05

---

## 🧩 FRS02 – Add/Remove Products from Cart

**Use Case:** User adds or removes products from the cart  
**Actors:** Logged-in user  
**Preconditions:** User is authenticated and on the product or cart page  
**Main Flow:**

1. User selects a product and adds it to the cart
2. Product appears in cart

**Alternative Flows:**

- User removes product from product page
- User removes product from cart page

**Related TS:** TS03, TS04, TS05  
**Related TC:** TC06–TC08

---

## 🧩 FRS03 – Navigation from Cart to Product Page

**Use Case:** User clicks "Continue Shopping" to return to product listing  
**Actors:** Logged-in user  
**Preconditions:** User is on the cart page  
**Main Flow:**

1. User clicks "Continue Shopping"
2. System redirects to inventory page

**Related TS:** TS06  
**Related TC:** TC09

---

## 🧩 FRS04 – Checkout Initiation

**Use Case:** User initiates checkout process  
**Actors:** Logged-in user  
**Preconditions:** Products are in cart  
**Main Flow:**

1. User clicks "Checkout"
2. System redirects to checkout step one

**Related TS:** TS07  
**Related TC:** TC10

---

## 🧩 FRS05 – Checkout Form Validation and Success

**Use Case:** User fills out checkout form and proceeds  
**Actors:** Logged-in user  
**Preconditions:** User is on checkout step one  
**Main Flow:**

1. User enters valid name and postal code
2. System redirects to checkout step two

**Alternative Flows:**

- Missing first name → error
- Missing last name → error
- Missing postal code → error

**Related TS:** TS08, TS09  
**Related TC:** TC11–TC14

---

## 🧩 FRS06 – Cancel Checkout and Return to Cart

**Use Case:** User cancels checkout and returns to cart  
**Actors:** Logged-in user  
**Preconditions:** User is on checkout step one  
**Main Flow:**

1. User clicks "Cancel"
2. System redirects to cart page

**Related TS:** TS10  
**Related TC:** TC15

---

## 🧩 FRS07 – Price Calculation and Total Verification

**Use Case:** User verifies total price including tax  
**Actors:** Logged-in user  
**Preconditions:** Products are in cart  
**Main Flow:**

1. User views checkout step two
2. System displays item total + tax = final total

**Related TS:** TS11  
**Related TC:** TC16

---

## 🧩 FRS08 – Order Confirmation After Checkout

**Use Case:** User completes checkout and receives confirmation  
**Actors:** Logged-in user  
**Preconditions:** User is on checkout step two  
**Main Flow:**

1. User clicks "Finish"
2. System displays confirmation message

**Related TS:** TS12  
**Related TC:** TC17

---

## 🧩 FRS09 – Cancel Checkout and Return to Inventory

**Use Case:** User cancels checkout and returns to product listing  
**Actors:** Logged-in user  
**Preconditions:** User is on checkout step two  
**Main Flow:**

1. User clicks "Cancel"
2. System redirects to inventory page

**Related TS:** TS13  
**Related TC:** TC18

---

## 🧩 FRS10 – Return to Product Page After Order Completion

**Use Case:** User clicks "Back Home" after order confirmation  
**Actors:** Logged-in user  
**Preconditions:** User is on checkout complete page  
**Main Flow:**

1. User clicks "Back Home"
2. System redirects to product page

**Related TS:** TS14  
**Related TC:** TC19

---

## 6. Non-Functional Requirements

- Responsive design across multiple browsers
- Fast loading of the product page
- Clear error messages for invalid login attempts

---

## 7. Assumptions

- No real payment processing is implemented
- Data resets between sessions
