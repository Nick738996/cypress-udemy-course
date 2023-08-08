describe('Second test suite', function () {
  it('First test case', function () {
    cy.visit('/');
    cy.get('[type="search"]').type('ca');
    cy.wait(1000);
    cy.get('.products').as('productLocator');
    cy.get('@productLocator')
      .find('.product')
      .each($el => {
        const textVeg = $el.find('h4.product-name').text();
        if (textVeg.includes('Cashews')) {
          cy.wrap($el).contains('button', 'ADD TO CART').click();
        }
      });
    cy.get('.cart-icon').find('img').click();
    cy.get('ul').find('.cart-item:visible').should('have.length', 1);
    cy.get('.action-block').contains('button', 'PROCEED TO CHECKOUT').click();
    cy.contains('button', 'Place Order').click();
  });
});
