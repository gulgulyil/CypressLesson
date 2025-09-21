describe("Ürün Ara, Fiyata Göre Sirala ve Sepete Ekle", function () {

    beforeEach(() => {
        //Etsy web sitesine gidilir
        cy.visit("https://etsy.com", {
            failOnStatusCode: false,

        })
        cy.contains('Accept').click()
        cy.url().should("include", "etsy")

    });

    it('Sayfanin en altina in ve A propos goruldugunu dogrula ', () => {
        cy.scrollTo("bottom");
        cy.get('nth-child(3) > .with-hide-xs').should('contain', 'About')
        cy.contains('About').should('be visible');
        cy.wait(2000)

    });
    it('ürun ara', () => {
        cy.scrollTo("top")
        cy.get('#global-enhancements-search-query').type('bracelet{enter}')
        cy.contains("Accepter").click()

    })
})