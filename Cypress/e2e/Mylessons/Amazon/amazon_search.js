import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor/methods";

Given('Amazon anasayfasına gidilir', () => {
    cy.visit('/');
});

Given('Çerezler kabul edilir', () => {
    cy.get('#sp-cc-accept', { timeout: 10000 }).click();
});

When('Arama kutusuna {string} yazılır ve enter’a basılır', (urun) => {
    cy.get('#twotabsearchtextbox').type(urun + '{enter}');
});

Then('En az {int} sonuç listelenmeli', (adet) => {
    cy.get('div.s-result-item[data-component-type="s-search-result"]')
        .its('length')
        .should('be.gte', adet);
});
