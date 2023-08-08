export class HomePage {
  getEditBox() {
    return cy.get('input[name="name"]').first();
  }

  getTwoWayDataBinding() {
    return cy.get('input[name="name"]').eq(1);
  }

  getGender() {
    return cy.get('select');
  }

  getEntrepreneur() {
    return cy.get('[value="option3"]');
  }

  getShopTab() {
    return cy.contains('a', 'Shop');
  }
}
export const homePage = new HomePage();
