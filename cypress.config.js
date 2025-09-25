
const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    // Include both .feature and classic .cy.js files
    specPattern: [
      'cypress/e2e/**/*.feature',
      'cypress/e2e/**/*.cy.js'
    ],
    supportFile: 'cypress/support/e2e.js',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 30000,
    chromeWebSecurity: false,
    retries: {
      runMode: 2,
      openMode: 1
    },
    baseUrl:
      process.env.TEST_ENV === 'etsy'
        ? 'https://www.etsy.com'
        : 'https://www.amazon.com.tr',

    async setupNodeEvents(on, config) {
      // Add the Cucumber plugin
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      // Required settings for Cucumber JSON output
      config.env.cucumberJson = {
        generate: true,
        outputFolder: 'cypress/cucumber-json',
        filePrefix: '',
        fileSuffix: '.json'
      };

      return config;
    },
  },
});
