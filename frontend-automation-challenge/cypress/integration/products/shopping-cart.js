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
});
