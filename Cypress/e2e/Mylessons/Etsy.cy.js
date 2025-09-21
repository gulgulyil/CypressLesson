describe("Ürün Ara, Fiyata Göre Sirala ve Sepete Ekle", function () {

    beforeEach(() => {
        //Etsy web sitesine gidilir
        cy.visit("https://etsy.com", {
            failOnStatusCode: false,
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0 Safari/537.36'
            }
        })
        //cy.contains('Accept').click()
        cy.url().should("include", "etsy")
        cy.scrollTo("buttom");
    });

    it('Sayfanin en altina in ve A propos goruldugunu dogrula ', () => {

    });
    it('ürun ara', () => {

    })
})