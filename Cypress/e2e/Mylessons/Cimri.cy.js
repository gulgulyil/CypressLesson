Describe("Cimri site testi", () => {

    beforeEach(() => {
        //Her test oncesinde cimri sitesine git

        cy.visit("https://www.cimri.com/");
    });


    AfterEach(() => {
        //Her test sonrasinda sayfayi yenile
        cy.reload();
    });

    it("Anasayfanin acildigini dogrulamalidir", () => {
        cy.url().should('eq', "https://www.cimri.com")
    });
})