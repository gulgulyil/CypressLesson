import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Navigate to Amazon homepage', () => {
    cy.visit('/');
});

Given('Accept cookies', () => {
    cy.get('#sp-cc-accept', { timeout: 10000 }).click();
});

When('Type {string} into the search box and press enter', (urun) => {
    cy.get('#twotabsearchtextbox').type(urun + '{enter}');
});

Then('At least {int} results should be listed', (adet) => {
    cy.get('div.s-result-item[data-component-type="s-search-result"]')
        .its('length')
        .should('be.gte', adet);
});
