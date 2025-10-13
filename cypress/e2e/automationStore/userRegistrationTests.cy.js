
import { urls } from "../../constants/urls";

import { createAccountPage } from "../../pages/automationStoreElements";
import { loginPage } from "../../pages/automationStoreElements";

describe(['smoke'], 'Cheks the registration option', () => {
    it('checks that a new user can register when using all valid data', () => {
        const uniqueSuffix = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

        cy.visit(urls.accountLoginPage)
            .get(loginPage.pageTitle)
            .should('have.text', " Account Login");
        cy.get(loginPage.continueButton)
            .click()
            .get(createAccountPage.pageTitle)
            .should('contain', "Create Account");


        cy.visit(urls.createAccountPage)
            .get(createAccountPage.firstnameInput).type("Automation")
            .get(createAccountPage.lastnameInput).type("Test")
            .get(createAccountPage.emailInput).type(`test${uniqueSuffix}@test.com`)
            .get(createAccountPage.address1Input).type("na, na ,na")
            .get(createAccountPage.cityInput).type("Iasi")
            .get(createAccountPage.countrySelect).select("Romania")
            .get(createAccountPage.regionSelect).select("Iasi")
            .get(createAccountPage.zipCodeInput).type("123456")
            .get(createAccountPage.loginNameInput).type(`autotest${uniqueSuffix}`)
            .get(createAccountPage.passwordInput).type("User1")
            .get(createAccountPage.passwordConfirmInput).type("User1")
            .get(createAccountPage.agreeToTermsCheckbox).check();
        cy.intercept('POST', 'https://automationteststore.com/index.php?rt=account/create').as('createUserRequest');
        cy.get(createAccountPage.continueButton).click({ force: true, timeout: 0 });
        cy.wait('@createUserRequest');

        cy.get(createAccountPage.pageTitle, { timeout: 10000 })
            .should('contain.text', 'Your Account Has Been Created!');
    })
})

it('studioTest', function() {});
