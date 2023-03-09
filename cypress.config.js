const { defineConfig } = require("cypress");


const allureWriter = require('@shelex/cypress-allure-plugin/writer');



module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/report",
    charts: true,
    reportPageTitle: 'Ulrich Demo Report',
    embeddedScreenshots: true
  },
  chromeWebSecurity: false,
    $schema: 'https://on.cypress.io/cypress.schema.json',
    experimentalStudio: true,
    screenshotOnRunFailure: true,
    videoOnRunFailure: true,
  e2e: {
    baseUrl: 'https://demo.nopcommerce.com/',
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config); return config;
      // implement node event listeners here
    }
    // ,specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx}'
  },
});
