
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 30000,
    chromeWebSecurity: false,
    retries: {
      runMode: 2,
      openMode: 1
    },
    // baseUrl'i environment değişkenine göre ayarla
    baseUrl: process.env.TEST_ENV === 'etsy'
      ? 'https://www.etsy.com'
      : 'https://www.amazon.com.tr'
  }
})