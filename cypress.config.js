const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require ("@shelex/cypress-allure-plugin/writer");

const customEsbuildPreprocessor = createCustomEsbuildPreprocessor('./custom-esbuild-preprocessor.js', esbuildOptions);

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  // e2e : {
  //   async setupNodeEvents(on,config){
  //     const bundler = createBundler({
  //       plugins: [createEsbuildPlugin(config)],
  //     });
  //     on("file:preprocessor",bundler);
  //     await addCucumberPreprocessorPlugin(on,config);
  //     return config;
  //   },
	specPattern: "**/*.feature",
    videosFolder: "cypress/reports/videos",
    screenshotsFolder: "cypress/reports/screenshots",
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    projectId: "3tbxdc",
  },
});