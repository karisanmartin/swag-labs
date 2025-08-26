import { type Page } from "@playwright/test";

export abstract class BasePage {
    constructor(
        protected readonly page: Page,
        protected readonly name: string,
        protected readonly url: string,
    ) {}

    public async open(): Promise<void> {
        await this.page.goto(this.url);
    }
}
