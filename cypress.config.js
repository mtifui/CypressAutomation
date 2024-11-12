const { defineConfig } = require("cypress");
const { tagify } = require("cypress-tags");
module.exports = defineConfig({

  defaultCommandTimeout: 4000,
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', tagify(config));
    },
    // baseUrl: "https://ultimateqa.com/automation",
    baseUrl: "https://automationteststore.com",

  },
  env: {
    INCLUDE_TAGS: "smoke, regression"
  }
})