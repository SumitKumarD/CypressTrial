const { defineConfig } = require("cypress");
watchForFileChanges=false
trashAssetsBeforeRuns=true
module.exports = defineConfig({
  projectId: '1xo1pv',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
