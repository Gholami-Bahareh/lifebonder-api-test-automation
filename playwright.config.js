const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,

  reporter: 'html',

  use: {
    baseURL: 'https://lifebondertestapi.azurewebsites.net',
  },
});