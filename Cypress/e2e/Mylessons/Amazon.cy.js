/// <reference types="cypress" />

describe("Amazon Testleri", () => {

    // Her test başlamadan önce çalışacak adımlar
    beforeEach(() => {
        cy.visit('https://www.amazon.com.tr');

        // Çerezleri kabul et, görünmesini bekle
        cy.get('#sp-cc-accept', { timeout: 10000 }).should('be.visible').click();
    });


    it("Url ve Title kontrolü", () => {
        cy.url().should('include', 'amazon');
        //cy.title().should('include', 'Amazon');
    });

    it("Ürün arama ve 5. ürünü seçme", () => {
        // Arama yap
        cy.get('#twotabsearchtextbox').type('Samsung s23 Ultra {enter}');

        // Arama sonuçlarının yüklenmesini bekle
        cy.get('.s-result-list .s-result-item', { timeout: 10000 })
            .should('have.length.greaterThan', 0);

        // 5. ürünün görünür olmasını bekleyip tıkla
        cy.get('.s-result-list .s-result-item')
            .eq(4)
            .scrollIntoView()
            .should('be.visible')
            .click();
    });

    it("Kategori seçim kutusunda Elektronik seç", () => {
        cy.get('#searchDropdownBox').select('Elektronik');
    });

    it("Profilim sekmesine geç", () => {
        cy.get('#nav-link-accountList').click();
    });

});

describe.only("Amazon ürün arama", function () {

    beforeEach(() => {
        cy.visit("/");       // baseUrl otomatik geliyor
        cy.acceptCookies();  // çerezleri otomatik kabul et
    });

    /*it("Url ve Title kontrolü", () => {
        cy.visit("/");
        cy.url().should('include', 'amazon');
        cy.get('#sp-cc-accept', { timeout: 10000 }).should('be.visible').click();

    });*/

    it('Arama kutusunu bul ve ürun adini gir', () => {

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