describe("Search Product, Sort by Price and Add to Cart", function () {

    beforeEach(() => {
        // Go to the Etsy website
        cy.visit("https://etsy.com", {
            failOnStatusCode: false,

        })
        cy.contains('Accept').click()
        cy.url().should("include", "etsy")

    });

    it('Scroll to the bottom of the page and verify that About is visible ', () => {
        cy.scrollTo("bottom");
        cy.get('nth-child(3) > .with-hide-xs').should('contain', 'About')
        cy.contains('About').should('be visible');
        cy.wait(2000)

    });
    it('Search for a product', () => {
        cy.scrollTo("top")
        cy.get('#global-enhancements-search-query').type('bracelet{enter}')
        cy.contains("Accepter").click()

    });

    it('Verify filter options and that sorting works', () => {
        cy.get('#sortby > .wt-menu__trigger').click()
        cy.wait(2000)
        //Define sorting options
        const sortingOptions = ['Most relevant', 'Price: low to high', 'Price: high to low', 'Top reviews', 'Newest']

        sortingOptions.forEach((option))

        cy.get('#sortby > .wt-menu__body a').
            contains(option)
            .should('be visible')
            .then(() => {
                cy.log('${option} sorting option is visible.');
            });

    });
});

/* forEach: Used to iterate over an array or list.
then: Waits for the previous command to complete, then executes the specified function.
cy.log: Cypress function to print a log message to the console.
const: JavaScript keyword to declare a variable with a constant (non-changeable) value.
 */