import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { InventoryProductComponent } from "../components/inventory-product.component";

export class InventoryPage extends BasePage {
    private readonly shoppingCartBadgeLocator: Locator;

    constructor(
        page: Page,

        private readonly inventoryProductComponent: InventoryProductComponent,
    ) {
        super(page, "Login", "https://www.saucedemo.com/inventory.html");
        this.shoppingCartBadgeLocator = this.page.locator(
            '[data-test="shopping-cart-link"]',
        );
    }

    async addProductToCart() {
        await this.inventoryProductComponent.addProductToCart();
    }

    async getShoppingCartBadgeAmount() {
        return await this.shoppingCartBadgeLocator.innerText();
    }

    async removeProductFromCart() {
        await this.inventoryProductComponent.removeFromCart();
    }
}
