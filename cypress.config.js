const { defineConfig } = require("cypress");


const allureWriter = require('@shelex/cypress-allure-plugin/writer');



module.exports = defineConfig({
  projectId: 'gzzwct',
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
    // baseUrl: 'https://demo.nopcommerce.com/',
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config); return config;
      // implement node event listeners here
    }
    ,specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}'
  },
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 2,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 0
  }

});
