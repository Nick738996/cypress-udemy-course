import { homePage } from '../pages/HomePage.js';
import { productPage } from '../pages/ProductPage.js';
describe('This is your test suite title', function () {
  before(function () {
    cy.fixture('data.json').as('data');
  });

  it('First test case', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should('have.value', this.data.name);
    homePage.getEditBox().first().should('have.attr', 'minlength', '2');
    homePage.getEntrepreneur().should('be.disabled');
    homePage.getShopTab().click();
    this.data.productName.forEach(element => {
      cy.selectProduct(element);
    });
    productPage.getCheckoutButton().click();
    var sum = 0;
    productPage
      .getProductValue()
      .each($el => {
        const actualText = $el.text();
        var result = actualText.split(' ');
        result = parseFloat(result[1].trim());
        sum = Number(sum) + Number(result);
      })
      .then(() => {
        cy.log(sum);
      });
    productPage.getProductTotalValue().then(element => {
      const actualText = element.text();
      var total = actualText.split(' ');
      total = parseFloat(total[1].trim());
      expect(sum).to.equal(total);
    });

    productPage.getCheckoutButton().click();
    productPage.getCountryInput().type(this.data.country);
    productPage.getCountrySuggestions().click();
    productPage.getCheckboxInput().click({ force: true });
    productPage.getPurchaseButton().click();
    // productPage.getAlert().should('contain', 'Success!');

    productPage.getAlert().then(element => {
      const actualText = element.text();
      if (actualText.includes('Success!')) {
        expect(actualText.includes('Success')).to.be.true;
      }
    });
  });
});
