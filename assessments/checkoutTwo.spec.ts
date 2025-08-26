import { CheckOutStepTwoBuilder } from "../builders/checkoutTwo.builder";
import { InventoryBuilder } from "../builders/inventory.builder";
import { InventoryPage } from "../pages/inventory.page";
import { test, expect } from "../utils/fixtures";

test.describe("Checkout Step two", () => {
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
        await inventoryPage.addProductToCart();
        await inventoryPage.addProductToCart();
    });

    test("TC17|Finish go to order confirmation ", async ({ page }) => {
        const checkoutPageTwo = new CheckOutStepTwoBuilder(page).build();

        await checkoutPageTwo.open();

        await checkoutPageTwo.finishCheckout();

        expect(
            await checkoutPageTwo.GoToCheckOutCompleteConfirmation(),
        ).toBeTruthy();
    });

    test("TC18|Checkout cancel go to inventory confirmation ", async ({
        page,
    }) => {
        const checkoutPageTwo = new CheckOutStepTwoBuilder(page).build();

        await checkoutPageTwo.open();

        await checkoutPageTwo.cancelShopping();

        expect(
            await checkoutPageTwo.cancelGoToProductsConfirmation(),
        ).toBeTruthy();
    });

    test("TC16|Total price verify", async ({ page }) => {
        const checkoutPageTwo = new CheckOutStepTwoBuilder(page).build();

        await checkoutPageTwo.open();

        const totalItems = await checkoutPageTwo.getItemTotal();

        const totalVerification = await checkoutPageTwo.verifyTotalProduct();

        expect(totalItems).toBeCloseTo(totalVerification);
    });
});
