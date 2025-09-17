const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.js",
    baseUrl: "https://www.amazon.com.tr"
  }
});
