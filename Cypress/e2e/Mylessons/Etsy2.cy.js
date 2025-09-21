describe("Ürün Ara, Fiyata Göre Sirala ve Sepete Ekle", function () {

    beforeEach(() => {
        //Etsy web sitesine gidilir
        cy.visit("https://etsy.com", {
            failOnStatusCode: false,

        })
        cy.contains('Accept').click()
        cy.url().should("include", "etsy")
        cy.scrollTo("buttom");
    });

    it('Sayfanin en altina in ve A propos goruldugunu dogrula ', () => {

    });
    it('ürun ara', () => {

    })
})