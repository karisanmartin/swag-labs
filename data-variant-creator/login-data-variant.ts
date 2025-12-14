import { LoginForm } from "../components/login.component";

export class LoginDataVariantCreator {
    constructor() {}

    private createBaseLoginDataVariant(
        overrides?: Partial<LoginForm>,
    ): LoginForm {
        return {
            /*
            It suppresses potential compile-time errors in scenarios where you, the developer, are certain the value will be present at runtime, but 
            the compiler cannot infer this certainty through its control flow analysis.
            */
            userName: process.env.SWAG_USER!,
            password: process.env.SWAG_PASS!,

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
            userName: process.env.SWAG_LOCKED_OUT_USER!,
            password: process.env.SWAG_LOCKED_OUT_PASSWORD!,
        });
    }
}
