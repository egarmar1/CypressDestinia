const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      if (config && config.env) {
        on("file:preprocessor", createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        }));
        preprocessor.addCucumberPreprocessorPlugin(on, config);
        allureWriter(on, config);
        //require('cypress-mochawesome-reporter/plugin')(on);
      } else {
        console.error("Invalid or missing config object");
      }
      return config;
    },
    specPattern: "**/*.feature",
    videosFolder: "cypress/reports/videos",
    screenshotsFolder: "cypress/reports/screenshots",
    projectId: "3tbxdc",
  },
});