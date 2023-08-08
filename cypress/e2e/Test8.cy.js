/// <reference types= "cypress-iframe" />
import 'cypress-iframe';
describe('Iframe Test', function () {
  it('First test case', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.frameLoaded('#courses-iframe');
    cy.iframe().find('a[href="mentorship"]').first(0).click();
    cy.wait(3000);
    cy.iframe()
      .find('.pricing-title', { timeout: 10000 })
      .should('have.length', 2);
  });
});
