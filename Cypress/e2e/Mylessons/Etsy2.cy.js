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

    });

    it('Filtre kisminin secenekleri ve calistigini dogrula', () => {
        cy.get('#sortby > .wt-menu__trigger').click()
        cy.wait(2000)
        //siralamanin seceneklerini tanimla
        const siralamaSecenekleri = ['Most relevant', 'Price: low to high', 'Price: high to low', 'Top reviews', 'Newest']

        siralamaSecenekleri.forEach((secenek))

        cy.get('#sortby > .wt-menu__body a').
            contains(secenek)
            .should('be visible')
            .then(() => {
                cy.log('${secenek} siralama secenegi gorunur.');
            });

    });
});

/* forEach: Bir dizi veya liste üzerinde iterasyon yapmak icin kullanilan bir dongu yapisisdir.
then: Onceki bir komutun tamaamlanmasini bekler ve ardindan belirtilen islevi calistirir.
cy.log: Bir log mesajini konsola yazdirmak icin kullanilan bir Cypress fonksiyonudur.
const: Degisken tanimlamak icin kullanilan bir JavaScript anahtar kelimesidir. Sabit (degistirilemez) bir deger atamak icin kullanilir.
 */