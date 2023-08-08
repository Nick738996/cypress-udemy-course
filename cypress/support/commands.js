Cypress.Commands.add('selectProduct', productName => {
  cy.get('h4.card-title').each(($el, index) => {
    if ($el.text().includes(productName)) {
      cy.get('button.btn.btn-info').eq(index).click();
    }
  });
});
