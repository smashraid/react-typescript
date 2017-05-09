require('chromedriver')
const {Builder, logging} = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

//logging.installConsoleHandler();
//logging.getLogger('promise.ControlFlow').setLevel(logging.Level.ALL);

function CustomWorld() {
  this.driver = new Builder()
    .forBrowser('chrome')
    .build();
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})