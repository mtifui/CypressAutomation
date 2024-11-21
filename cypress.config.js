const { defineConfig } = require("cypress");
const { tagify } = require("cypress-tags");
require('dotenv').config({ path: './credentials.env' });

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true,
  },
  env: {
    AUTOMATION_STORE_PASSWORD: process.env.AUTOMATION_STORE_PASSWORD,
    INCLUDE_TAGS: "smoke, regression"
  },
  defaultCommandTimeout: 4000,
  e2e: {
    projectId: 'CypressAutomation',
    setupNodeEvents(on, config) {
      on('file:preprocessor', tagify(config));
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    // baseUrl: "https://ultimateqa.com/automation",
    baseUrl: "https://automationteststore.com",

  }
})