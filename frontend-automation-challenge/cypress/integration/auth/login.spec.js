const validationMessages = {
  invalidCredentials: /Epic sadface: Username and password do not match any user in this service/i,
};

beforeEach(() => {
  cy.fixture("users").as("users");
});

describe("Login", () => {
  it("Login with a valid user", function () {
    const { standardUser } = this.users;
    cy.visit("/");
    cy.findByPlaceholderText("Username").type(standardUser.username);
    cy.findByPlaceholderText("Password").type(standardUser.password);
    cy.findByRole("button", { name: /login/i }).click();
    cy.findByText(/products/i);
  });

  it("Login with a invalid user", function () {
    const { invalidUser } = this.users;
    cy.visit("/");
    cy.findByPlaceholderText("Username").type(invalidUser.username);
    cy.findByPlaceholderText("Password").type(invalidUser.password);
    cy.findByRole("button", { name: /login/i }).click();
    cy.findByText(validationMessages.invalidCredentials);
  });
});
