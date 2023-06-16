const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = (on, config) => {
  allureWriter(on, config);
    on('before:browser:launch', (browser = {}, args) => {
      if (browser.name === 'chrome') {
        args.push('--remote-debugging-port=9222');
        return args;
      }
    });
  };