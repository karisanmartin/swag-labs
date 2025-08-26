import { CheckoutStepTwoProductListComponents } from "../components/checkoutTwo.componets";
import { CheckOutStepTowPage } from "../pages/checkoutTwo.page";
import { Page } from "@playwright/test";

export class CheckOutStepTwoBuilder {
    constructor(private readonly page: Page) {}

    build() {
        return new CheckOutStepTowPage(
            this.page,
            new CheckoutStepTwoProductListComponents(this.page),
        );
    }
}
