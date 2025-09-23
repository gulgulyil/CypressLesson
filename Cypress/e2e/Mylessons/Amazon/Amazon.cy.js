/// <reference types="cypress" />

describe("Amazon Tests", () => {

    // Steps to run before each test
    beforeEach(() => {
        cy.visit('https://www.amazon.com.tr');

        // Accept cookies, wait until it is visible
        cy.get('#sp-cc-accept', { timeout: 10000 }).should('be.visible').click();
    });


    it("Check URL and Title", () => {
        cy.url().should('include', 'amazon');
        //cy.title().should('include', 'Amazon');
    });

    it("Search product and select the 5th item", () => {
        // Perform search
        cy.get('#twotabsearchtextbox').type('Samsung s23 Ultra {enter}');

        // Wait for search results to load
        cy.get('.s-result-list .s-result-item', { timeout: 10000 })
            .should('have.length.greaterThan', 0);

        // Wait for the 5th product to be visible and click it
        cy.get('.s-result-list .s-result-item')
            .eq(4)
            .scrollIntoView()
            .should('be.visible')
            .click();
    });

    it("Select Electronics from category dropdown", () => {
        cy.get('#searchDropdownBox').select('Elektronik');
    });

    it("Navigate to 'My Account", () => {
        cy.get('#nav-link-accountList').click();
    });

});

describe.only("Amazon product search", function () {

    beforeEach(() => {
        cy.visit("/");       // baseUrl is applied automatically
        cy.acceptCookies();  // automatically accept cookies
    });

    /*it("Check URL and Title", () => {
        cy.visit("/");
        cy.url().should('include', 'amazon');
        cy.get('#sp-cc-accept', { timeout: 10000 }).should('be.visible').click();

    });*/

    it('Find search box and enter product name', () => {

        const urunAdi = "alcatel 20196";
        cy.get("#twotabsearchtextbox").type(urunAdi).type('{enter}')
        //cy.xpath("//input[@id='sp-cc-accept']").click();
        //cy.get('div.s-result-item').should('have.length', 4);
        cy.get('div.s-result-item[data-component-type="s-search-result"]').should('have.length', 4);
    });

    /*
    it('Arama sonuclarini dogrula', () => {
        cy.get('.sg-col-inner').should('have.length', 5)
    });
    

    it('Bilgisayar araması yap', () => {
        cy.searchProduct('Bilgisayar'); // custom command ile arama yap
        cy.url().should('include', 's?k=Bilgisayar'); // arama sonuçları kontrolü
    });
    */
});