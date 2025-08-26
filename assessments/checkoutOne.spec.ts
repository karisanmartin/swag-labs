import { test, expect } from "../utils/fixtures";
import { CheckoutStepOneDataVariantCreator } from "../data-variant-creator/checkoutOne.data-variant";
import { CheckoutOneBuilder } from "../builders/checkoutOne.builder";
import { InventoryBuilder } from "../builders/inventory.builder";
import { InventoryPage } from "../pages/inventory.page";

test.describe("Checkout Step One", () => {
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

    test("TC11|Checkout successful go to checkout step two", async ({
        page,
    }) => {
        const successfulCheckout =
            new CheckoutStepOneDataVariantCreator().createValidCheckout();

        const checkoutPage = new CheckoutOneBuilder(page)
            .withCheckoutStepOne(successfulCheckout)
            .build();

        await checkoutPage.open();

        await checkoutPage.goCheckOutStepTwo();

        expect(await checkoutPage.checkoutConfirmation()).toBeTruthy();
    });

    test("TC15|Checkout cancel button back to cart", async ({ page }) => {
        const successfulCheckout =
            new CheckoutStepOneDataVariantCreator().createValidCheckout();

        const checkoutPage = new CheckoutOneBuilder(page)
            .withCheckoutStepOne(successfulCheckout)
            .build();

        await checkoutPage.open();

        await checkoutPage.backToYourCart();

        expect(await checkoutPage.backToYourCartConfirmation()).toBeTruthy();
    });

    test("TC12|Checkout missing first name get error message", async ({
        page,
    }) => {
        const noUserNameVariantData =
            new CheckoutStepOneDataVariantCreator().createCredentialWithoutUserName();

        const checkoutPage = new CheckoutOneBuilder(page)
            .withCheckoutStepOne(noUserNameVariantData)
            .build();

        await checkoutPage.open();

        await checkoutPage.goCheckOutStepTwo();

        expect(
            await checkoutPage.verifyUserNameErrorMessageCheckout(),
        ).toBeTruthy();
    });

    test("TC13|Checkout missing last name get error message", async ({
        page,
    }) => {
        const noLastNameVariantData =
            new CheckoutStepOneDataVariantCreator().createCredentialsWithoutLastName();

        const checkoutPage = new CheckoutOneBuilder(page)
            .withCheckoutStepOne(noLastNameVariantData)
            .build();

        await checkoutPage.open();

        await checkoutPage.goCheckOutStepTwo();

        expect(
            await checkoutPage.verifyLastNameErrorMessageCheckout(),
        ).toBeTruthy();
    });

    test("TC14|Checkout missing Post Code get error message", async ({
        page,
    }) => {
        const noPostCodeVariantData =
            new CheckoutStepOneDataVariantCreator().createCredentialsWithoutPostalCode();

        const checkoutPage = new CheckoutOneBuilder(page)
            .withCheckoutStepOne(noPostCodeVariantData)
            .build();

        await checkoutPage.open();

        await checkoutPage.goCheckOutStepTwo();

        expect(
            await checkoutPage.verifyPostalCodeErrorMessageCheckout(),
        ).toBeTruthy();
    });
});
