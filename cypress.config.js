
const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    // Feature dosyalarını da görecek şekilde pattern’i güncelledik
    specPattern: [
      "cypress/e2e/**/*.feature",   // Cucumber senaryoları
      "cypress/e2e/**/*.cy.js"      // Mevcut normal testleriniz
    ],
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
    // baseUrl environment’a göre
    baseUrl: process.env.TEST_ENV === 'etsy'
      ? 'https://www.etsy.com'
      : 'https://www.amazon.com.tr',

    async setupNodeEvents(on, config) {
      // <-- Cucumber için gerekli plugin kurulumu
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      return config;
    }
  }
});