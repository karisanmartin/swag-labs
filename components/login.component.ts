import { Locator, type Page } from "@playwright/test";

export type LoginForm = {
    userName: string;
    password: string;
};

export class LoginFormComponent {
    private readonly userNameLocator: Locator;
    private readonly passwordLocator: Locator;
    private readonly loginLocator: Locator;
    private readonly errorLocator: Locator;

    constructor(
        page: Page,
        private readonly logingForm: LoginForm,
    ) {
        this.userNameLocator = page.locator('input[id="user-name"]');
        this.passwordLocator = page.locator('input[id="password"]');
        this.loginLocator = page.locator('input[id="login-button"]');
        this.errorLocator = page.locator('h3[data-test="error"]');
    }

    public async loginFillComponent() {
        await this.userNameLocator.fill(this.logingForm.userName);
        await this.passwordLocator.fill(this.logingForm.password);
        await this.loginLocator.click();
    }

    //crear otro metodo para obtener el mensaje de error
    public async getErrorMessage() {
        // dentro del metodo, usar el locator para obtener el texto del error
        return await this.errorLocator.textContent();
    }
}
