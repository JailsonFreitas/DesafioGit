import { defineConfig } from "cypress";
require("dotenv").config(); 
export default defineConfig({
  e2e: {
    baseUrl: "https://www.toolsqa.com/selenium-training/#enroll-form",
    viewportHeight: 768,
    viewportWidth: 1366,
    chromeWebSecurity: false,
    video: false,
    testIsolation: false,
    specPattern: "cypress/e2e/**/*.ts",

    env: {
      urlHome: "https://www.sandbox.paypal.com/xoplatform/logger/api/logger**",
      SEARCH_TERM: process.env.SEARCH_TERM, 
    },

    setupNodeEvents(on, config) {
      config.env.SEARCH_TERM = process.env.SEARCH_TERM;
      return config;
    },
  },
});
