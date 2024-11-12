// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { loginPage } from '../pages/automationStoreElements';
import { urls } from '../constants/urls';

Cypress.Commands.add('goToTheBigPage', () => {
    cy.visit('/');
    /*
    cy.get(firstPage.linkListLocators)
        .contains("Big page with many elements")
        .click()
        */
})

Cypress.Commands.add('login', (username, password) => {
    cy.visit('/index.php?rt=account/login');
    cy.get(loginPage.loginInput)
        .type(username);
    cy.get(loginPage.passwordInput)
        .type(password)
        .get(loginPage.loginButton)
        .click();
})

Cypress.Commands.add('addToCart', (productId) => {
    const addToCartUrl = urls.addToCart(productId);
    cy.request({
        method: 'GET',
        url: addToCartUrl
    }).then((response) => {
        expect(response.status).to.eq(200);
    })
})

Cypress.Commands.add('getCartContent', () => {
    const url = urls.getCart;
    return cy.request({
        method: 'GET',
        url: url
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response.body;
    })
})

Cypress.Commands.add('removeProductFromCart', (productId) => {
    const removeFromCartUrl = urls.removeFromCart(productId);
    return cy.request({
        method: 'GET',
        url: removeFromCartUrl
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response.body;
    })

})