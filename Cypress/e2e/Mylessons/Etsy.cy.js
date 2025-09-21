/// <reference types="cypress" />

describe('Etsy Tests', () => {

    // -----------------------------
    // BEFORE EACH HOOK
    // -----------------------------
    beforeEach(() => {
        // Visit Etsy homepage
        cy.visit('https://www.etsy.com', {
            failOnStatusCode: false,
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0 Safari/537.36'
            }
        })

        // Click cookie banner if it exists (optional)
        cy.contains(/Accept|Agree/, { timeout: 10000 }).then($btn => {
            if ($btn.length) cy.wrap($btn).click({ force: true })
        })

        // Verify URL includes 'etsy.com'
        cy.url().should('include', 'etsy.com')

        // Scroll to bottom; do not fail if not scrollable
        cy.scrollTo('bottom', { ensureScrollable: false })
    })

    // -----------------------------
    // SMOKE TEST (real site)
    // -----------------------------
    it('Homepage loads correctly', () => {
        cy.get('header').should('be.visible')
        cy.get('input[name="search_query"]').should('exist')
    })

    // -----------------------------
    // MOCK TESTS (safer and more stable)
    // -----------------------------
    it('Displays search results correctly using mock data', () => {
        // Intercept API request and return fixture
        cy.intercept('GET', '/search*', { fixture: 'searchResults.json' })

        // Visit mock page (local/staging)
        cy.visit('/mock-page.html')

        // Check product titles
        cy.get('.product-title').should('have.length', 2)
        cy.get('.product-title').first().should('contain.text', 'Red Dress')
    })

    it('Sorts products by price using mock data', () => {
        cy.intercept('GET', '/search*', { fixture: 'searchResults.json' })
        cy.visit('/mock-page.html')

        // Click the sort by price button
        cy.get('#sort-price').click()

        // Verify products are sorted in ascending order
        cy.get('.product-price').then($prices => {
            const values = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')))
            expect(values).to.deep.equal(values.slice().sort((a, b) => a - b))
        })
    })
})

