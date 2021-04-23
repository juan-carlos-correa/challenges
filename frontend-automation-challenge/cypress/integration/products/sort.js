beforeEach(() => {
  cy.fixture("products").as("products");
});

describe("sort products", () => {
  it("should sort the products by price (low to high)", function () {
    cy.login();

    cy.findByRole("combobox").select("Price (low to high)");

    cy.get(".inventory_list .inventory_item").as("listItems");

    const [
      firstProduct,
      secondProduct,
      ...restProducts
    ] = cy.saucedemo.sortProductsBy(
      this.products,
      cy.saucedemo.sort.LOW_TO_HIGH_PRICE
    );

    cy.get("@listItems")
      .first()
      .contains(firstProduct.name, { matchCase: false });

    cy.get("@listItems")
      .first()
      .next()
      .contains(secondProduct.name, { matchCase: false });

    const lastProduct = restProducts.pop();

    cy.get("@listItems")
      .last()
      .contains(lastProduct.name, { matchCase: false });
  });
});
