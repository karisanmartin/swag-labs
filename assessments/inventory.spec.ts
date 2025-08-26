import { test, expect } from "../utils/fixtures";
import { InventoryBuilder } from "../builders/inventory.builder";

test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();

    await loginPage.login();
});

test("TC06|Add product to cart successful", async ({ page }) => {
    const inventoryPage = new InventoryBuilder(page).build();

    await inventoryPage.open();
    await inventoryPage.addProductToCart();
    await inventoryPage.addProductToCart();
    await inventoryPage.addProductToCart();
    await inventoryPage.addProductToCart();
    expect(await inventoryPage.getShoppingCartBadgeAmount()).toEqual("4");
});

test("TC07|Remove product from cart successful", async ({ page }) => {
    const inventoryPage = new InventoryBuilder(page).build();

    await inventoryPage.open();
    await inventoryPage.addProductToCart();
    await inventoryPage.addProductToCart();
    expect(await inventoryPage.getShoppingCartBadgeAmount()).toEqual("2");

    await inventoryPage.removeProductFromCart();
    expect(await inventoryPage.getShoppingCartBadgeAmount()).toEqual("1");
});
