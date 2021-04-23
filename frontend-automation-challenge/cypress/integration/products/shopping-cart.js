beforeEach(() => {
  cy.fixture("products").as("products");
});

describe("shopping cart", () => {
  it("should add selected items to the shopping cart", function () {
    cy.login();

    const productName = "Sauce Labs Backpack";

    cy.addToShoppingCart(productName);

    cy.clickShoppingCart();

    cy.contains(/your cart/i).should("be.visible");
    cy.contains(productName).should("be.visible");
  });

  it("should add Sauce Labs Onesie item to the shopping cart", () => {
    cy.login();

    const productName = "Sauce Labs Onesie";

    cy.addToShoppingCart(productName);

    cy.clickShoppingCart();

    cy.contains(/your cart/i).should("be.visible");
    cy.contains(productName).should("be.visible");
  });
});
