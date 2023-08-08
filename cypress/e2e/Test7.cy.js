describe('Fifth test suite', function () {
  it('First test case', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    // cy.get('#opentab').should(
    //   'have.attr',
    //   'href',
    //   'https://www.qaclickacademy.com'
    // );
    cy.get('#opentab').then(function (el) {
      const url = el.prop('href');
      cy.visit(url);
      cy.origin(url, () => {
        cy.get('#navbarSupportedContent').find('a[href*="about"]').click();
      });
    });
  });
});
