import { Locator, type Page } from "@playwright/test";

export type YourInformation = {
    name: string;
    lastName: string;
    postalCode: string;
};

export class CheckoutStepOneInfoComponent {
    private readonly firstNameLocator: Locator;
    private readonly lastNameLocator: Locator;
    private readonly postalCodeLocator: Locator;
    private readonly continueButton: Locator;
    private readonly cancelButton: Locator;
    private readonly errorLocator: Locator;

    constructor(
        page: Page,
        private readonly yourInformation: YourInformation,
    ) {
        this.firstNameLocator = page.locator('input[id="first-name"]');
        this.lastNameLocator = page.locator('input[id="last-name"]');
        this.postalCodeLocator = page.locator('input[id="postal-code"]');
        this.continueButton = page.locator('input[id="continue"]');
        this.cancelButton = page.locator('button[id="cancel"]');
        this.errorLocator = page.locator('h3[data-test="error"]');
    }

    public async checkoutFillInformation() {
        await this.firstNameLocator.fill(this.yourInformation.name);
        await this.lastNameLocator.fill(this.yourInformation.lastName);
        await this.postalCodeLocator.fill(this.yourInformation.postalCode);
        await this.continueButton.click();
    }

    public async cancelGoBackToYourcart() {
        await this.cancelButton.click();
    }

    public async getErrorMessageCheckoutOne() {
        return await this.errorLocator.textContent();
    }
}
