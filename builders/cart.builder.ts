import { type Page } from "@playwright/test";
import { CartComponent } from "../components/cart.component";
import { CartPage } from "../pages/cart.page";

export class CartBuilder {
    constructor(private readonly page: Page) {}

    build() {
        return new CartPage(this.page, new CartComponent(this.page));
    }
}
