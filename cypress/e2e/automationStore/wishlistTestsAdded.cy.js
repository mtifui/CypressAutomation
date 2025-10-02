import { beforeEach } from "mocha";
import { validUser } from "../../constants/credentials";

describe(['smoke'], 'Checks wishlist add / remove and update functionality - newly added', () => {
    const productId = 68;
    beforeEach('Login', () => {
        cy.login(validUser.userName, validUser.password)
    })
    it('Checks add to wishlist - newly added', () => {
        cy.addProductToWishlist(productId).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.contain('success":"Added to wish list')
        });
        cy.getWishlist().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.contain(`product_id=${productId}`);
            expect(response.body).to.contain('Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15');
        });
    });

    it('Checks the remove from wishlist - newly added', () => {
        cy.removeItemFromWishlist(productId).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.eq(`{"success":"Removed from wish list"}`)
        })
    })
});