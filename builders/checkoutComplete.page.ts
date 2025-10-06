import { CheckoutCompletePage } from "../pages/checkout-complete.page";
import { Page } from "@playwright/test";

export class CheckoutCompleteBuilder {
    constructor(private readonly page: Page) {}

    build() {
        return new CheckoutCompletePage(this.page);
    }
}
