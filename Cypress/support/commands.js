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

import './commands';
import 'cypress-xpath'; // to enable XPath usage

// Custom command to automatically accept cookies
Cypress.Commands.add('acceptCookies', () => {
    cy.xpath("//input[@id='sp-cc-accept']").click({ force: true });
});

// Custom command to search for a product
Cypress.Commands.add('searchProduct', (productName) => {

    cy.get('#twotabsearchtextbox').type(`${productName}{enter}`);
});