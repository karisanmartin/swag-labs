import { Locator, type Page } from "@playwright/test";

export class InventoryProductComponent {
    private readonly addToCartButton: Locator;
    private readonly removeButton: Locator;

    constructor(page: Page) {
        this.addToCartButton = page.getByRole("button", {
            name: /Add to cart/,
        });
        this.removeButton = page.getByRole("button", { name: /Remove/ });
    }

    public async addProductToCart() {
        const buttons = await this.addToCartButton.all();
        const index = this.getRandomIndex(0, buttons.length);
        await buttons[index].click();
    }

    public async removeFromCart() {
        const buttons = await this.removeButton.all();
        const index = this.getRandomIndex(0, buttons.length);
        await buttons[index].click();
    }
    //https://www.w3schools.com/jsref/jsref_random.asp
    private getRandomIndex(start: number, end: number) {
        return Math.floor(Math.random() * end + start);
    }
}
