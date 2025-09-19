/// <reference types="cypress" />

describe("Cimri site testi", () => {

    beforeEach(() => {
        //Her test oncesinde cimri sitesine git

        cy.visit("https://www.cimri.com/");
    });

    afterEach(() => {
        //Her test sonrasinda sayfayi yenile
        cy.reload();
    });

    it("Anasayfanin acildigini dogrulamalidir", () => {
        cy.url().should('eq', "https://www.cimri.com");

        //Anasayfanin basligini kontrol et
        cy.title().should('include', 'Cimri');
    });

    it('Arama yapilmalidir ve sonuclar dogrulanmalidir', () => {

        const expectedText = 'Asus rog zephyrus'

        cy.get('.s17vz787-1').click();
        cy.get('.s17vz787-4').type(expectedText)
        cy.wait(2000)
        cy.contains('asus rog zephyrus g14').click();
    })
})