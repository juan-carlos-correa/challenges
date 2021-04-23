describe("logout", () => {
  it("Logout the current logged user", () => {
    cy.login();
    cy.findByRole("button", { name: /open menu/i }).click();
    cy.findByRole("link", { name: /logout/i }).click();
    cy.findByRole("button", { name: /login/i });
  });
});
