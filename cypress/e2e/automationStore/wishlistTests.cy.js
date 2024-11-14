import { validUser } from "../../constants/credentials";
import { expectedText } from "../../constants/notificationAndMessages";


describe('Cheks wishlist add / remove and update functionality', () => {
    it('Checks add to wishlits', () => {
        const productId = 68;
        cy.login(validUser.userName, validUser.password)
        cy.addProductToWishlist(productId).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.contain('success":"Added to wish list')
        });
        cy.getWishlist().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.contain(`product_id=${productId}`);
            expect(response.body).to.contain('Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15');
        });
        cy.removeItemFromWishlist(productId).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.eq(`{"success":"Removed from wish list"}`)
        })
    });
});