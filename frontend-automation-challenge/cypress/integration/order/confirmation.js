describe("order confirmation", () => {
  it("should complete purchase", () => {
    cy.login();

    const productName = "Sauce Labs Backpack";

    cy.addToShoppingCart(productName);

    cy.clickShoppingCart();

    cy.findByRole("button", { name: /checkout/i }).click();

    const fakeUser = {
      name: "john",
      lastname: "doe",
      zipcode: "777",
    };

    cy.findByPlaceholderText(/first name/i).type(fakeUser.name);
    cy.findByPlaceholderText(/last name/i).type(fakeUser.lastname);
    cy.findByPlaceholderText(/zip\/postal code/i).type(fakeUser.zipcode);

    cy.findByRole("button", { name: /continue/i }).click();

    cy.findByRole("button", { name: /finish/i }).click();

    cy.contains(/checkout: complete/i).should("be.visible");
    cy.contains(/thank you for your order/i).should("be.visible");
    cy.contains(
      /Your order has been dispatched, and will arrive just as fast as the pony can get there!/i
    ).should("be.visible");
  });
});
