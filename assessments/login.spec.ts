import { test, expect } from "@playwright/test";
import { LoginBuilder } from "../builders/login.builder";
import { LoginDataVariantCreator } from "../data-variant-creator/login-data-variant";

test("TC01|Successful login  go to products page", async ({ page }) => {
    const successfulLogin = new LoginDataVariantCreator().createValidLogin();

    const loginPage = new LoginBuilder(page).withLogin(successfulLogin).build();

    await loginPage.open();

    await loginPage.login();

    expect(await loginPage.verifyUserLandedHomePage()).toBeTruthy();
});

test("TC02|Missing username get error message", async ({ page }) => {
    const noUserVariantData =
        new LoginDataVariantCreator().createCredentialWithoutUserName();

    const loginPage = new LoginBuilder(page)
        .withLogin(noUserVariantData)
        .build();

    await loginPage.open();

    await loginPage.login();

    expect(await loginPage.verifyUserNameErrorMessage()).toBeTruthy();
});

test("TC03|Missing password get error message", async ({ page }) => {
    const noPasswordVariantData =
        new LoginDataVariantCreator().createCredentialsWithoutPassword();

    const loginPage = new LoginBuilder(page)
        .withLogin(noPasswordVariantData)
        .build();

    await loginPage.open();

    await loginPage.login();

    expect(await loginPage.verifyPasswordErrorMessage()).toBeTruthy();
});

test("TC04|Attempt home access no login get error mesaje", async ({ page }) => {
    const noLoginVariantData = {} as any;
    const loginPage = new LoginBuilder(page)
        .withLogin(noLoginVariantData)
        .build();

    await loginPage.tryCheckoutPage();

    expect(await loginPage.verifytUnauthorizedAccessMessage()).toBeTruthy();
});

test("TC05|Locked out user error message ", async ({ page }) => {
    const lockedOutUserVariantData =
        new LoginDataVariantCreator().createLockedOutUser();

    const loginPage = new LoginBuilder(page)
        .withLogin(lockedOutUserVariantData)
        .build();

    await loginPage.open();

    await loginPage.login();

    expect(await loginPage.verifyLockedOutUser()).toBeTruthy();
});
