
import { firstPage } from '../pages/firstPage';
import { manyElementsPage } from '../pages/bigPageManyElements';

describe.skip('check the page is loaded succesfully', () => {

  const expectedLinks = ["Big page with many elements", "Fake Landing Page", "Fake Pricing Page", "Fill out forms", "Learn how to automate an application that evolves over time", "Login automation", "Interactions with simple elements"];
  beforeEach(() => {
    cy.visit('/')
  })
  it('should have the links to the test pages loaded', () => {
    cy.get('span[id="Automation_Practice"] span span span')
      .should('have.text', "Automation Practice")
      .get(firstPage.linkListLocators)
      .should('have.length', expectedLinks.length)
      .each((link, index) => {
        cy.wrap(link).should('have.text', expectedLinks[index]);
      })
  })

  it('should open the Big page with many elements and interact with it', () => {
    cy.goToTheBigPage();
    cy.get('span[id="Skills_Improved"]')
      .should('have.text', 'Skills Improved:')
      .get(manyElementsPage.allButtons)
      .should('have.length', 12)
      .contains("Button")
      .click();
  })

  it('should have twitter and facebook links', () => {
    cy.goToTheBigPage();
    cy.get(manyElementsPage.twitterButtons)
      .should('have.length', 5);
    cy.get(manyElementsPage.facebookButtons)
      .should('have.length', 5);
  })

  it('should be able to go to twitter via the links', () => {
    cy.goToTheBigPage();
    cy.get(manyElementsPage.twitterButtons)
      .first()
      .click()
      .wait(5000);
    cy.origin('https://x.com', () => {
      cy.get("h1[id='modal-header'] span span")
        .should('have.text', "Sign in to X");
    });
  })

  it('should be able to navigate to facebook', () => {
    cy.goToTheBigPage();
    cy.get(manyElementsPage.facebookButtons)
      .first()
      .click()
      .wait(5000);
    cy.origin('https://www.facebook.com/Ultimateqa1/', () => {
      cy.get("div[role='dialog'] div[aria-label='Languages']")
        .should('be.visible');
    })
  })
}
)