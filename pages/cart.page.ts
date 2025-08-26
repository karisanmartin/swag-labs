import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { CartComponent } from "../components/cart.component";

export class CartPage extends BasePage {
    private readonly checkoutTitleLocator: Locator;
    private readonly continueShoppingTitleLocator: Locator;
    private readonly continueShoppingButton: Locator;
    private readonly checkoutButton: Locator;

    constructor(
        page: Page,
        private readonly cartComponent: CartComponent,
    ) {
        super(page, "yourCart", "https://www.saucedemo.com/cart.html");
        this.checkoutTitleLocator = this.page.getByText(
            "Checkout: Your Information",
        );
        this.continueShoppingTitleLocator = this.page.getByText("Products");
        this.continueShoppingButton = page.locator(
            'button[id="continue-shopping"]',
        );
        this.checkoutButton = page.locator('button[id="checkout"]');
    }

    async backToProduct() {
        await this.continueShoppingButton.click();
    }

    async goCheckOut() {
        await this.checkoutButton.click();
    }

    async removeProductFromCart() {
        await this.cartComponent.removeFromCart();
    }

    async checkoutConfirmation() {
        const isVisile = await this.checkoutTitleLocator.isVisible();
        return isVisile;
    }

    async continueShoppingConfirmation() {
        const isVisible = await this.continueShoppingTitleLocator.isVisible();
        return isVisible;
    }
}
