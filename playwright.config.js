const { defineConfig } = require('@playwright/test');
const { config } = require('./config/config');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,

  reporter: 'html',

  use: {
    baseURL: config.baseURL,
  },
});