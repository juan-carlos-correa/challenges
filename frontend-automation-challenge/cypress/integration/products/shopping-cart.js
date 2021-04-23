beforeEach(() => {
  cy.fixture("products").as("products");
});

describe("shopping cart", () => {
  it("should add selected items to the cart", function () {
    cy.login();

    cy.get(".inventory_list .inventory_item").as("listItems");

    cy.get("@listItems")
      .first()
      .get(".inventory_item_description")
      .findByRole("link")
      .then(($productNameLink) => {
        cy.log($productNameLink.text());

        cy.get("@listItems")
          .first()
          .get(".inventory_item_description")
          .findByRole("button")
          .click();

        cy.get(".shopping_cart_link").click();

        cy.findByText($productNameLink.text()).should("be.visible");
      });
  });

  it("should add Sauce Labs Onesie item to the shopping cart", () => {
    cy.login();

    const product = "Sauce Labs Onesie";

    cy.contains(product)
      .parent()
      .parent()
      .findByRole("button", { name: /add to cart/i })
      .click();

    cy.get(".shopping_cart_link").click();

    cy.contains(/your cart/i).should("be.visible");
    cy.contains(product).should("be.visible");
  });
});
