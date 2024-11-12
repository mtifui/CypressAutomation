import { loginPage } from "../pages/automationStoreElements";
import { mainPage } from "../pages/automationStoreElements";
import { accountPage } from "../pages/automationStoreElements";
import { errorMessages } from "../constants/notificationAndMessages";
import { expectedText } from "../constants/notificationAndMessages"
import { validUser } from "../constants/credentials";

describe(['smoke'], 'Check the main page of the store', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('loads the first page succesfully', () => {
    cy.get(mainPage.pageLogo)
      .should('have.attr', 'title', 'Automation Test Store')
      .and('be.visible', mainPage.homeMenu)
      .get(mainPage.loginRegisterButton)
      .click()
    cy.get("section[class='breadcrumbs'")
      .invoke('text').then((text) => {
        const cleanedText = text.replace(/[\n\t]/g, '')
          .replace(/\s{2,}/g, ' ')
          .trim();
        expect(cleanedText).to.equal(expectedText.breadcrumb)
      });
  })

  it('loggs in with an existing valid account', () => {
    cy.login(validUser.userName, validUser.password)
      .get(accountPage.welcomeHeader)
      .should('have.text', 'Welcome back mirela');
    cy.url().should('include', "account/account");
  })

  it('is not able to login with an unregistered account', () => {
    cy.login("user", "pass")
      .get(loginPage.errorMessageContainer)
      .invoke('text').then((text) => {
        const cleanedWarning = text.replace(/[\n×\n/]/g, '').trim();
        expect(cleanedWarning).to.equal(errorMessages.loginError);
      })
    cy.url().should('contain', 'account/login');

  })
});