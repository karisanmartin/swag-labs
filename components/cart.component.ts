import { Locator, type Page } from "@playwright/test";

export class CartComponent {
    private readonly removeButton: Locator;

    constructor(page: Page) {
        this.removeButton = page.getByRole("button", { name: /Remove/ });
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
