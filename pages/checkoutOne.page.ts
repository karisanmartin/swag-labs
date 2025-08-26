import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { CheckoutStepOneInfoComponent } from "../components/CheckoutOne.components";

export class CheckoutOnePage extends BasePage {
    private readonly continueTitleLocator: Locator;
    private readonly cancelTitleLocator: Locator;

    constructor(
        page: Page,
        private readonly checkoutStepOneInfoComponent: CheckoutStepOneInfoComponent,
    ) {
        super(
            page,
            "Checkout: Your information",
            "https://www.saucedemo.com/checkout-step-one.html",
        );
        this.continueTitleLocator = this.page.getByText("Checkout: Overview");
        this.cancelTitleLocator = this.page.getByText("Your Cart");
    }

    async backToYourCart() {
        await this.checkoutStepOneInfoComponent.cancelGoBackToYourcart();
    }

    async goCheckOutStepTwo() {
        await this.checkoutStepOneInfoComponent.checkoutFillInformation();
    }

    async checkoutConfirmation() {
        const isVisile = await this.continueTitleLocator.isVisible();
        return isVisile;
    }

    async backToYourCartConfirmation() {
        const isVisible = await this.cancelTitleLocator.isVisible();
        return isVisible;
    }

    async verifyUserNameErrorMessageCheckout() {
        const errorMsg =
            await this.checkoutStepOneInfoComponent.getErrorMessageCheckoutOne();
        return errorMsg === "Error: First Name is required";
    }

    async verifyLastNameErrorMessageCheckout() {
        const errorMsg =
            await this.checkoutStepOneInfoComponent.getErrorMessageCheckoutOne();
        return errorMsg === "Error: Last Name is required";
    }

    async verifyPostalCodeErrorMessageCheckout() {
        const errorMsg =
            await this.checkoutStepOneInfoComponent.getErrorMessageCheckoutOne();
        return errorMsg === "Error: Postal Code is required";
    }
}
