// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "@testing-library/cypress/add-commands";

Cypress.Commands.add("login", (username, password) => {
  cy.fixture("users").then((users) => {
    // Note: this should be an no-UI operation, but the app has not a backend as a way of stub the login
    // there is no a /login request to stub :(
    if (!username && !password) {
      username = users.standardUser.username;
      password = users.standardUser.password;
    }

    cy.visit("/");
    cy.findByPlaceholderText("Username").type(username);
    cy.findByPlaceholderText("Password").type(password);
    cy.findByRole("button", { name: /login/i }).click();
  });
});
