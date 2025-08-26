import { Locator, type Page } from "@playwright/test";

export class CheckoutStepTwoProductListComponents {
    private readonly priceLocator: Locator;

    constructor(page: Page) {
        this.priceLocator = page.locator(".inventory_item_price"); //define the locator of a .inventory-item-price class
    }
    //Gets the prices of the products and transforms them from string to numbers
    public async getPriceItems(): Promise<Array<number>> {
        const pricesAsString = await this.priceLocator.allInnerTexts();
        return pricesAsString.map((item) => {
            let price = parseFloat(item.replace("$", ""));
            return Math.round(price * 100) / 100;
        });
    }
}
