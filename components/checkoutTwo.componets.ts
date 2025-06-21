import { Locator, type Page } from "@playwright/test";

export class CheckoutStepTwoProductListComponents {
    private readonly priceLocator: Locator;

    constructor(page: Page) {
        this.priceLocator = page.locator(".inventory_item_price"); //definir el locator de una clase .inventory-item-price
    }
    //obtiene los precios de los productos y los transforma de string a numeros
    public async getPriceItems(): Promise<Array<number>> {
        const pricesAsString = await this.priceLocator.allInnerTexts();
        return pricesAsString.map((item) => {
            let price = parseFloat(item.replace("$", ""));
            return Math.round(price * 100) / 100;
        });
    }
}
