import { CheckoutCompleteBuilder } from "../builders/checkoutComplete.page";
import { test, expect } from "../utils/fixtures";
import { InventoryBuilder } from "../builders/inventory.builder";
import { InventoryPage } from "../pages/inventory.page";

test.describe("Checkout Complete", () => {
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
    });

    test("TC19|Back Home confirmation ", async ({ page }) => {
        const checkoutcomplete = new CheckoutCompleteBuilder(page).build();

        await checkoutcomplete.open();

        await checkoutcomplete.backToInventory();

        expect(await checkoutcomplete.backProductsConfirmation()).toBeTruthy();
    });
});
