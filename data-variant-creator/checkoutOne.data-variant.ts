import { YourInformation } from "../components/CheckoutOne.components";
import { faker } from "@faker-js/faker";

export class CheckoutStepOneDataVariantCreator {
    constructor() {}

    private createBaseCheckoutOneDataVariant(
        overrides?: Partial<YourInformation>,
    ): YourInformation {
        return {
            name: faker.person.firstName(),
            lastName: faker.person.lastName(),
            postalCode: faker.location.zipCode(),

            ...overrides,
        };
    }

    createValidCheckout(): YourInformation {
        return this.createBaseCheckoutOneDataVariant();
    }

    createEmptyCheckout(): YourInformation {
        return this.createBaseCheckoutOneDataVariant({
            name: "",
            lastName: "",
            postalCode: "",
        });
    }

    createCredentialWithoutUserName(): YourInformation {
        return this.createBaseCheckoutOneDataVariant({
            name: "",
        });
    }

    createCredentialsWithoutLastName(): YourInformation {
        return this.createBaseCheckoutOneDataVariant({
            lastName: "",
        });
    }

    createCredentialsWithoutPostalCode(): YourInformation {
        return this.createBaseCheckoutOneDataVariant({
            postalCode: "",
        });
    }
}
