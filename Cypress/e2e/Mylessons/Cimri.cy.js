/// <reference types="cypress" />

describe("Cimri site test", () => {

    beforeEach(() => {
        // Go to Cimri site before each test
        cy.visit("https://www.cimri.com/");
    });

    afterEach(() => {
        // Refresh the page after each test
        cy.reload();
    });

    it("Should verify that the homepage opens", () => {
        cy.url().should('eq', "https://www.cimri.com");

        //Check the homepage title
        cy.title().should('include', 'Cimri');
    });

    it('Should perform a search and verify the results', () => {

        const expectedText = 'Asus rog zephyrus'

        cy.get('.s17vz787-1').click();
        cy.get('.s17vz787-4').type(expectedText)
        cy.wait(2000)
        cy.contains('asus rog zephyrus g14').click();
    })
})