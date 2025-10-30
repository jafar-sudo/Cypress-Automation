const { defineConfig } = require("cypress");
 
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    video: true,                   // enable/disable video recording
    screenshotOnRunFailure: true,  // capture screenshot on failure
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
 



