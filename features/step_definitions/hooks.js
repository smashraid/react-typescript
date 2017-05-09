var {defineSupportCode} = require('cucumber');

defineSupportCode(function({After, setDefaultTimeout}) {
  setDefaultTimeout(60 * 2000);
  After(function() {
    return this.driver.quit();
  });
});