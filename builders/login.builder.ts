import { type Page } from "@playwright/test";
import { LoginForm, LoginFormComponent } from "../components/login.component";
import { LoginPage } from "../pages/login.page";

export class LoginBuilder {
    private logingFormComponent: LoginFormComponent;
    constructor(private readonly page: Page) {}

    withLogin(data: LoginForm): LoginBuilder {
        this.logingFormComponent = new LoginFormComponent(this.page, data);
        return this;
    }

    build() {
        return new LoginPage(this.page, this.logingFormComponent);
    }
}
