
import { urls } from "../../constants/urls";
import { createAccountPage } from "../../pages/automationStoreElements";
import { loginPage } from "../../pages/automationStoreElements";

const counter = Math.floor((Math.random() * 1000)) + 1
describe(['smoke'], 'Cheks the registration option', () => {
    it('checks that a new user can register when using all valid data', () => {
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
            .get(createAccountPage.emailInput).type(`test@test${counter}.com`)
            .get(createAccountPage.address1Input).type("na, na ,na")
            .get(createAccountPage.cityInput).type("Iasi")
            .get(createAccountPage.countrySelect).select("Romania")
            .get(createAccountPage.regionSelect).select("Iasi")
            .get(createAccountPage.zipCodeInput).type("123456")
            .get(createAccountPage.loginNameInput).type(`autotest${counter}`)
            .get(createAccountPage.passwordInput).type("User1")
            .get(createAccountPage.passwordConfirmInput).type("User1")
            .get(createAccountPage.agreeToTermsCheckbox).check();
        cy.get(createAccountPage.continueButton).click({ force: true, timeout: 0 });
        cy.intercept('POST', 'https://automationteststore.com/index.php?rt=account/create', {
            statusCode: 200,
            body: { "success": true, "message": "User account successfully created" },
        }).as('createUserResponse');

        (interception) => {
            expect(interception.response.statusCode).to.equal(200);
            expect(interception.response.body).to.have.property('success', true);
            expect(interception.response.body).to.have.property('message', 'User account successfully created');
        };

        cy.get('span.maintext')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.eq('Your Account Has Been Created!')
            });
    })
})
