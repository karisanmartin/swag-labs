import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { LoginBuilder } from '../builders/login.builder';
import { LoginDataVariantCreator } from '../data-variant-creator/login-data-variant';


type MyFixtures = {
    loginPage: LoginPage;

};

export const test = base.extend<MyFixtures>({
    loginPage: async({ page },use) => {
        const successfulLogin = new LoginDataVariantCreator().createValidLogin();
    
       
           const loginPage =new LoginBuilder(page).withLogin(successfulLogin).build();
       
           await use(loginPage);

    }
});

export { expect } from'@playwright/test';