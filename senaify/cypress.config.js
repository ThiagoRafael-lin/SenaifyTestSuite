const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'http://localhost:8081',

    //tamanho da tela (de maneira mais especifica)
    viewportWidth: 414,
    viewportHeight: 896,
    testIsolation : false,
    reactNativeHotReload: true
    },
});
