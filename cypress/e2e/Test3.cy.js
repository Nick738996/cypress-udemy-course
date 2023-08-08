describe('Third test suite', function () {
  it('First test case', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.clearAllCookies();
    // checkbox
    cy.get('#checkBoxOption1').then(function (checkbox1) {
      cy.wrap(checkbox1)
        .check()
        .should('be.checked')
        .and('have.value', 'option1');
      cy.wrap(checkbox1).uncheck().should('not.be.checked');
    });
    cy.get('[type="checkbox"]').check(['option2', 'option3']);
    // static dropdown
    cy.get('select').select('option2').should('have.value', 'option2');
    // dynamic dropdown
    cy.get('[placeholder="Type to Select Countries"]').type('ind');
    cy.get('#ui-id-1')
      .find('.ui-menu-item')
      .each($el => {
        if ($el.text() === 'India') {
          cy.wrap($el).click();
        }
      });
    cy.get('[placeholder="Type to Select Countries"]').should(
      'have.value',
      'India'
    );
    cy.get('[placeholder="Hide/Show Example"]').then(element => {
      cy.wrap(element).should('be.visible');
      cy.get('[value="Hide"]').click();
      cy.wrap(element).should('not.be.visible');
      cy.get('[value="Show"]').click();
      cy.wrap(element).should('be.visible');
    });
    // radio box
    cy.get('[value="radio2"]').check().should('be.checked');
  });
});
