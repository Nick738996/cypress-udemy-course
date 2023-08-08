describe('Fourth test suite', function () {
  it('First test case', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('[onclick="displayAlert()"]').click();
    cy.get('[onclick="displayConfirm()"]').click();
    cy.on('window:alert', function (str) {
      expect(str).to.equal(
        'Hello , share this practice page and share your knowledge'
      );
    });
    cy.on('window:confirm', function (str) {
      expect(str).to.equal('Hello , Are you sure you want to confirm?');
    });
    cy.get('#opentab').invoke('removeAttr', 'target').click();
    cy.origin('https://www.qaclickacademy.com/', () => {
      cy.url().should('include', 'qaclickacademy');
      cy.go('back');
    });
  });
});
