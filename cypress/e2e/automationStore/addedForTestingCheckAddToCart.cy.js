
import { validUser } from "../../constants/credentials";
import { accountPage } from "../../pages/automationStoreElements";
import { options } from "../../constants/categoryOptions"
import "cypress-real-events/support";
import { categoriesNavigationBar } from "../../pages/automationStoreElements";

describe('addedForTesting Checks that you are able to add to cart', () => {

    const makeupSubcategories = ['Cheeks', 'Eyes', 'Face', 'Lips', 'Nails', 'Value Sets'];
    beforeEach('Navigate to the main page - addedForTesting', () => {
        cy.login(validUser.userName, validUser.password)
            .get(accountPage.welcomeHeader)
            .should('have.text', 'Welcome back mirela');
        cy.url().should('include', "account/account");
    })
    it(['smoke'], 'Cheks the available categories and subcategories', () => {
        cy.get("ul.nav-pills.categorymenu li a").contains(options.makeup)
            .then(($makeupElement) => {
                cy.wrap($makeupElement)
                    .realHover()
                cy.get(categoriesNavigationBar.makeupSubcategories, { timeout: 1000 })
                    .should('be.visible')
                    .should('have.length', 6)
                    .each((category, index) => {
                        cy.wrap(category).should('contain', makeupSubcategories[index])
                    })
            })
    })

    it(['regression'], 'Adds a product to cart - addedForTesting', () => {
        const productId = 50;
        cy.getCartContent().then((content) => {
            if (content.item_count !== 0) {
                const productIdMatch = (content.cart_details).match(/product_id=(\d+)/);
                const cartProductId = productIdMatch ? productIdMatch[1] : null;
                if (cartProductId) {
                    cy.removeProductFromCart(cartProductId);
                }
            }
        })

        cy.addToCart(productId).then((response) => {
            expect(response.body.item_count).to.eq(1);
            expect(response.body.total).to.eq('$29.50');
            expect(response.body.cart_details).to.include("Skinsheen Bronzer Stick");
            expect(response.body.cart_details).to.include("$29.50")
        })

    })
})