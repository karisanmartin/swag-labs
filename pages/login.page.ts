import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { LoginFormComponent } from "../components/login.component";

export class LoginPage extends BasePage {
    private readonly homeTitleLocator: Locator;
    constructor(
        page: Page,
        private readonly logingFormComponent: LoginFormComponent,
    ) {
        super(page, "Login", "https://www.saucedemo.com");
        this.homeTitleLocator = this.page.getByText("Swag Labs");
    }

    async login() {
        await this.logingFormComponent.loginFillComponent();
    }

    async tryCheckoutPage() {
        await this.page.goto(
            "https://www.saucedemo.com/checkout-complete.html",
        );
    }

    async verifyUserLandedHomePage() {
        const loginSuccessful = await this.homeTitleLocator.isVisible();
        return loginSuccessful;
    }

    async verifyUserNameErrorMessage() {
        const error = await this.logingFormComponent.getErrorMessage();
        return error === "Epic sadface: Username is required";
    }

    async verifyPasswordErrorMessage() {
        const error = await this.logingFormComponent.getErrorMessage();
        return error === "Epic sadface: Password is required";
    }

    async verifytUnauthorizedAccessMessage(): Promise<boolean> {
        const error = await this.logingFormComponent.getErrorMessage();
        return (
            error ===
            "Epic sadface: You can only access '/checkout-complete.html' when you are logged in."
        );
    }

    async verifyLockedOutUser() {
        const error = await this.logingFormComponent.getErrorMessage();
        return error === "Epic sadface: Sorry, this user has been locked out.";
    }
}
