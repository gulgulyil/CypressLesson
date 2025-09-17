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
        cy.title().should('include', 'Amazon');
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


});