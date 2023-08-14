const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = defineConfig({
  projectId: '1xo1pv',
  e2e: {
    watchForFileChanges: false,
    trashAssetsBeforeRuns: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
    },
  },
});
