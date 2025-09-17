/// <reference types="cypress" />

describe("Amazon Testleri", () => {

    // Her test başlamadan önce çalışacak adımlar
    beforeEach(() => {
        cy.visit('https://www.amazon.com.tr');

        // Çerezleri kabul et, görünmesini bekle
        cy.get('#sp-cc-accept', { timeout: 10000 }).should('be.visible').click();
    });


});