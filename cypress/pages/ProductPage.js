export class ProductPage {
  getCheckoutButton() {
    return cy.contains('Checkout');
  }
  getCountryInput() {
    return cy.get('#country');
  }

  getCountrySuggestions() {
    return cy.get('.suggestions');
  }

  getPurchaseButton() {
    return cy.get('[value="Purchase"]');
  }

  getCheckboxInput() {
    return cy.get('[type="checkbox"]');
  }

  getAlert() {
    return cy.get('.alert');
  }

  getProductValue() {
    return cy.get('tr td:nth-child(4) strong');
  }

  getProductTotalValue() {
    return cy.get('h3 strong');
  }
}
export const productPage = new ProductPage();
