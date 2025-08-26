import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="item-4-title-link"]').click();
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="back-to-products"]').click();
    await page
        .locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
        .click();
    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page
        .locator('[data-test="cart-list"] div')
        .filter({ hasText: "1Sauce Labs Backpackcarry." })
        .locator('[data-test="item-quantity"]')
        .click();
    await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();

    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill("Karol");
    await page.locator('[data-test="lastName"]').fill("Moreno");
    await page.locator('[data-test="postalCode"]').fill("95200");
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="title"]').click();
    await page.locator('[data-test="finish"]').click();
    await expect(page.getByText("Thank you for your order!")).toBeVisible();
    /* await page.locator('[data-test="complete-header"]').click();
  await page.locator('[data-test="back-to-products"]').click();
*/
});
