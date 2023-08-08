describe('Fifth test suite', function () {
  it('First test case', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('[name="courses"]')
      .find('td:nth-child(2)')
      .each(function ($el, index) {
        if (
          $el.text() === 'Master Selenium Automation in simple Python Language'
        ) {
          // cy.wrap($el).siblings('td:nth-child(3)').should('contain', '25');
          cy.wrap($el).next().should('have.text', '25');
        }
      });
  });
});
