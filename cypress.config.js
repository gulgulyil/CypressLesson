
const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    // Hem .feature hem de klasik .cy.js dosyalarını kapsasın
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
      // Cucumber eklentisini ekle
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      // 🔑 Cucumber JSON çıktısı için gerekli ayar
      config.env.cucumberJson = {
        generate: true,
        outputFolder: 'cypress/cucumber-json',
        filePrefix: '',       // isteğe bağlı
        // fileSuffix: '.cucumber'  <-- bunu kaldırın veya '.json' yapın
      };

      return config;
    },
  },
});
