/// <reference types="cypress" />

describe('Etsy Tests', () => {

    // -----------------------------
    // BEFORE EACH HOOK
    // -----------------------------
    beforeEach(() => {
        // Etsy ana sayfasını ziyaret et
        cy.visit('https://www.etsy.com', {
            failOnStatusCode: false,
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0 Safari/537.36'
            }
        })

        // Çerez banner varsa tıkla (opsiyonel)
        cy.contains(/Accept|Kabul Et|Accepter/, { timeout: 10000 }).then($btn => {
            if ($btn.length) cy.wrap($btn).click({ force: true })
        })

        // URL doğrulaması
        cy.url().should('include', 'etsy.com')

        // Sayfayı en alta kaydır, scrollable değilse hata vermesin
        cy.scrollTo('bottom', { ensureScrollable: false })
    })

    // -----------------------------
    // SMOKE TEST (gerçek site)
    // -----------------------------
    it('Homepage loads correctly', () => {
        cy.get('header').should('be.visible')
        cy.get('input[name="search_query"]').should('exist')
    })

    // -----------------------------
    // MOCK TESTS (daha güvenli ve stabil)
    // -----------------------------
    it('Search results display correctly using mock', () => {
        // API isteğini mockla
        cy.intercept('GET', '/search*', { fixture: 'searchResults.json' })

        // Mock sayfa veya staging URL
        cy.visit('/mock-page.html')

        // Ürün başlıklarını kontrol et
        cy.get('.product-title').should('have.length', 2)
        cy.get('.product-title').first().should('contain.text', 'Red Dress')
    })

    it('Sort by price using mock data', () => {
        cy.intercept('GET', '/search*', { fixture: 'searchResults.json' })
        cy.visit('/mock-page.html')

        // Sıralama butonunu tıkla
        cy.get('#sort-price').click()

        // Sıralamayı kontrol et
        cy.get('.product-price').then($prices => {
            const values = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')))
            expect(values).to.deep.equal(values.slice().sort((a, b) => a - b))
        })
    })
})
