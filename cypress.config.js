const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://rahulshettyacademy.com/seleniumPractise/#/',
    pageLoadTimeout: 30000,
    defaultCommandTimeout: 8000,
    reporter: 'mochawesome',
  },
});
