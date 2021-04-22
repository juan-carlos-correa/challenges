const standardUser = {
  username: "standard_user",
  password: "secret_sauce",
};

const invalidUser = {
  username: "standard_user",
  password: "invalidPassword",
};

const validationMessages = {
  invalidCredentials: /Epic sadface: Username and password do not match any user in this service/i,
};

describe("Login", () => {
  it("Login with a valid user", () => {
    cy.visit("/");
    cy.findByPlaceholderText("Username").type(standardUser.username);
    cy.findByPlaceholderText("Password").type(standardUser.password);
    cy.findByRole("button", { name: /login/i }).click();
    cy.findByText(/products/i);
  });

  it("Login with a invalid user", () => {
    cy.visit("/");
    cy.findByPlaceholderText("Username").type(invalidUser.username);
    cy.findByPlaceholderText("Password").type(invalidUser.password);
    cy.findByRole("button", { name: /login/i }).click();
    cy.findByText(validationMessages.invalidCredentials);
  });
});
