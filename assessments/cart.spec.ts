import { test, expect } from "../utils/fixtures";
import { CartBuilder } from "../builders/cart.builder";
import { InventoryBuilder } from "../builders/inventory.builder";
import { InventoryPage } from "../pages/inventory.page";

test.describe("Cart", () => {
    let inventoryBuilder: InventoryBuilder;
    let inventoryPage: InventoryPage;

    test.beforeEach(async ({ loginPage, page }) => {
        await loginPage.open();

        await loginPage.login();

        inventoryBuilder = new InventoryBuilder(page);
        inventoryPage = inventoryBuilder.build();
        await inventoryPage.open();
        await inventoryPage.addProductToCart();
        await inventoryPage.addProductToCart();
        await inventoryPage.addProductToCart();
    });

    test("TC08|Remove product from cart successful", async () => {
        await inventoryPage.removeProductFromCart();
        expect(await inventoryPage.getShoppingCartBadgeAmount()).toEqual("2");
    });

    test("TC09|Continue shopping go to a products", async ({ page }) => {
        const cartPage = new CartBuilder(page).build();

        await cartPage.open();
        await cartPage.backToProduct();
        expect(await cartPage.continueShoppingConfirmation()).toBeTruthy();
    });

    test("TC10|Checkout go to step one", async ({ page }) => {
        const cartPage = new CartBuilder(page).build();

        await cartPage.open();
        await cartPage.goCheckOut();
        expect(await cartPage.checkoutConfirmation()).toBeTruthy();
    });
});
