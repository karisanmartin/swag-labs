import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { CheckoutStepTwoProductListComponents } from "../components/checkoutTwo.componets";

export class CheckOutStepTowPage extends BasePage {
    private readonly cancelButton: Locator;
    private readonly finishButton: Locator;
    private readonly calcelButtonTitleLocator: Locator;
    private readonly finishButtonTitleLocator: Locator;
    private readonly itemTotalLocator: Locator;

    constructor(
        page: Page,
        private readonly checkoutStepTwoProductListComponents: CheckoutStepTwoProductListComponents,
    ) {
        super(
            page,
            "Chekout: Overview",
            "https://www.saucedemo.com/checkout-step-two.html",
        );

        this.cancelButton = page.locator('button[id="cancel"]');
        this.finishButton = page.locator('button[id="finish"]');
        this.calcelButtonTitleLocator = page.getByText("Products");
        this.finishButtonTitleLocator = page.getByText(
            "Thank you for your order!",
        );
        this.itemTotalLocator = page.locator(".summary_subtotal_label");
    }

    public async cancelShopping() {
        await this.cancelButton.click();
    }

    public async finishCheckout() {
        await this.finishButton.click();
    }

    async cancelGoToProductsConfirmation() {
        const isVisible = await this.calcelButtonTitleLocator.isVisible();
        return isVisible;
    }

    async GoToCheckOutCompleteConfirmation() {
        const isVisible = await this.finishButtonTitleLocator.isVisible();
        return isVisible;
    }
    //total pagina, transformado a numero
    public async getItemTotal(): Promise<number> {
        const totalItemPriceAsString = await this.itemTotalLocator.innerText();
        const pricePart = totalItemPriceAsString.split(":");
        return parseFloat(pricePart[1].replace("$", ""));
    }

    //suma de los Items
    public async verifyTotalProduct() {
        const productPrices =
            await this.checkoutStepTwoProductListComponents.getPriceItems();
        let total = productPrices.reduce((suma, numero) => suma + numero, 0);
        return Math.round(total * 100) / 100;
    }
}
