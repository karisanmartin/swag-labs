# 🧪 Test Scenarios – Swag Labs Automation

This document outlines the key scenarios to be validated through automated testing. Each scenario represents a user flow or condition that reflects expected system behavior.

---

## ✅ Test Scenario Table

| Scenario ID | Reference | Title                                 | Description                                                                  | Preconditions                            | Expected Outcome                                            |
| ----------- | --------- | ------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------- |
| TS01        | FRS       | Login Functionality                   | User logs in with valid credentials                                          | Valid username and password              | User is redirected to the product page                      |
| TS02        | FRS       | Login Error Messages                  | User attempts login with missing or blocked credentials                      | Invalid or missing login data            | Error message is displayed                                  |
| TS03        | FRS       | Add Product to Cart from Product Page | User adds a product to the cart from the product listing                     | User is logged in                        | Product appears in the cart                                 |
| TS04        | FRS       | Remove Product from Product Page      | User removes a product directly from the product listing                     | Product is already in the cart           | Product is no longer visible in the cart                    |
| TS05        | FRS       | Remove Product from Cart Page         | User removes a product from the cart page                                    | Product is already in the cart           | Product is no longer visible in the cart                    |
| TS06        | FRS       | Continue Shopping Button              | Clicking the "Continue Shopping" button returns the user to the product page | User clicks the button                   | User is redirected to the inventory page                    |
| TS07        | FRS       | Checkout Button                       | Clicking the "Checkout" button proceeds to checkout step one                 | User clicks the button                   | User is redirected to checkout step one                     |
| TS08        | FRS       | Successful Checkout                   | User fills out the checkout form correctly and proceeds                      | Name and postal code entered (via Faker) | Checkout continues successfully                             |
| TS09        | FRS       | Checkout Form Validation              | User submits incomplete checkout form                                        | Required fields left empty               | Error message is displayed                                  |
| TS10        | FRS       | Cancel Button (Cart Page)             | Clicking the "Cancel" button returns the user to the cart page               | User clicks the button                   | User is redirected back to the cart                         |
| TS11        | FRS       | Verify Total Price                    | Verify total amount including selected items and tax                         | Items added to cart                      | Final total is correctly calculated and displayed           |
| TS12        | FRS       | Finish Button – Order Confirmation    | Clicking the "Finish" button completes the order                             | Checkout is complete                     | Confirmation page is shown with “Thank you for your order!” |
| TS13        | FRS       | Cancel Button (Checkout Page)         | Clicking the "Cancel" button returns the user to the inventory page          | User clicks the button                   | User is redirected back to the inventory page               |
| TS14        | FRS       | Back Home Button                      | Clicking the "Back Home" button returns the user to the product listing      | User clicks the button                   | User is redirected back to the product page                 |

---
