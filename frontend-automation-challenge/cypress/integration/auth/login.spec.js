const standardUser = {
  username: "standard_user",
  password: "secret_sauce",
};

describe("Login", () => {
  it("Login with a valid user", () => {
    cy.visit("https://www.saucedemo.com");
    cy.findByPlaceholderText("Username").type(standardUser.username);
    cy.findByPlaceholderText("Password").type(standardUser.password);
    cy.findByRole("button", { name: /login/i }).click();
    cy.findByText(/products/i);
  });
});
