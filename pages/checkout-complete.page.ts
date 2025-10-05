import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class CheckoutCompletePage extends BasePage {
    private readonly backHomeLocator: Locator;
    private readonly BackToProductsTitleLocator: Locator;

    constructor(page: Page) {
        super(
            page,
            "Checkout: Complete",
            "https://www.saucedemo.com/checkout-complete.html",
        );
        this.backHomeLocator = this.page.locator(
            'button[id="back-to-products"]',
        );
        this.BackToProductsTitleLocator = this.page.getByText("Products");
    }

    async backToInventory() {
        await this.backHomeLocator.click();
    }

    async backProductsConfirmation() {
        const isVisile = await this.BackToProductsTitleLocator.isVisible();
        return isVisile;
    }
}
