describe('First test suite', function () {
  it('First test case', function () {
    cy.visit('/');
    cy.get('[type="search"]').type('ca');
    cy.wait(1000);
    cy.get('.products')
      .find('.product:visible')
      .then(products => {
        cy.wrap(products).should('have.length', 4);
        cy.wrap(products)
          .eq(2)
          .contains('button', 'ADD TO CART')
          .click()
          .then(function () {
            console.log('test');
          });
      });
    cy.get('.products')
      .find('.product')
      .each($el => {
        const textVeg = $el.find('h4.product-name').text();
        if (textVeg.includes('Cashews')) {
          cy.wrap($el).contains('button', 'ADD TO CART').click();
        }
      });
    cy.get('.brand').then(function (logoelement) {
      cy.log(logoelement.text());
      expect(logoelement.text()).to.equal('GREENKART');
    });
    cy.get('.brand').should('have.text', 'GREENKART');
    cy.get('.cart-icon').find('img').click();
  });
});
