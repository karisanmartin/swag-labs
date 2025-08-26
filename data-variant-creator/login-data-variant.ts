import { LoginForm } from "../components/login.component";

export class LoginDataVariantCreator {
    constructor() {}

    private createBaseLoginDataVariant(
        overrides?: Partial<LoginForm>,
    ): LoginForm {
        return {
            userName: "standard_user",
            password: "secret_sauce",

            ...overrides,
        };
    }

    createValidLogin(): LoginForm {
        return this.createBaseLoginDataVariant();
    }

    createEmptyLogin(): LoginForm {
        return this.createBaseLoginDataVariant({
            userName: "",
            password: "",
        });
    }

    createCredentialWithoutUserName(): LoginForm {
        return this.createBaseLoginDataVariant({
            userName: "",
        });
    }

    createCredentialsWithoutPassword(): LoginForm {
        return this.createBaseLoginDataVariant({
            password: "",
        });
    }

    createLockedOutUser(): LoginForm {
        return this.createBaseLoginDataVariant({
            userName: "locked_out_user",
            password: "secret_sauce",
        });
    }
}
