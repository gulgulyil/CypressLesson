
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",
    baseUrl: "https://www.amazon.com.tr",
    supportFile: "cypress/support/e2e.js"
    viewportWidth: 1280;
    viewportHeight: 720;
  }
});
