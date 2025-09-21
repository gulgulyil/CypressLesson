describe("Ürün Ara, Fiyata Göre Sirala ve Sepete Ekle", function () {

    beforeEach(() => {
        //Etsy web sitesine gidilir
        cy.visit("https://etsy.com")
        cy.contains('Accepter').click()
        cy.url().should("i", "https:/etsy.com")
        cy.scrollTo("buttom");
    });

    it('Sayfanin en altina in ve A propos goruldugunu dogrula ', () => {

    });
    it('ürun ara', () => {

    })
})