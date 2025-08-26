import { Page } from "@playwright/test";
import {
    CheckoutStepOneInfoComponent,
    YourInformation,
} from "../components/CheckoutOne.components";
import { CheckoutOnePage } from "../pages/checkoutOne.page";

export class CheckoutOneBuilder {
    private checkoutStepOneInfoComponent: CheckoutStepOneInfoComponent;

    constructor(private readonly page: Page) {}

    withCheckoutStepOne(dataVariant: YourInformation): CheckoutOneBuilder {
        this.checkoutStepOneInfoComponent = new CheckoutStepOneInfoComponent(
            this.page,
            dataVariant,
        );
        return this;
    }

    build() {
        return new CheckoutOnePage(
            this.page,
            this.checkoutStepOneInfoComponent,
        );
    }
}
