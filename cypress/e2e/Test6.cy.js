describe('Fifth test suite', function () {
  it('First test case', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('.mouse-hover-content').invoke('show');
    cy.contains('Top').click();
    cy.url().should('include', 'top');
  });
});
