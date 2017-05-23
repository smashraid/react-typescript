const chai = require('chai')
var sinon = require('sinon')
const expect = chai.expect;
const should = chai.should();
const stub = sinon.stub;
const assert = chai.assert;

const { By, until, WebElement } = require('selenium-webdriver');
const { defineSupportCode } = require('cucumber');
const { removeDoubleQuotes } = require("../support/helper");

defineSupportCode(function ({ Given, When, Then }) {
    Given('I navigate to {stringInDoubleQuotes}', function (stringInDoubleQuotes) {
        return this.driver.get(removeDoubleQuotes(stringInDoubleQuotes));
    });
    Given('use the following data', function (table, callback) {
        let driver = this.driver;
        table.rawTable.forEach(function (element) {
            let name = "select[name='" + removeDoubleQuotes(element[0]) + "'] option[value='" + removeDoubleQuotes(element[1]) + "']";
            var query = driver.wait(until.elementLocated(By.css(name)));
            query.click();
        }, this);
        callback();
    });
    When('I click on Get My Quote with id {stringInDoubleQuotes}', function (stringInDoubleQuotes) {
        return this.driver.findElement(By.id(stringInDoubleQuotes)).click();
    });
    Then('I should see a coverage with id {stringInDoubleQuotes}', function (stringInDoubleQuotes, callback) {
        this.driver.findElement(By.id(stringInDoubleQuotes)).getText().then(function (text) {
            let coverage = parseFloat(text);
            expect(coverage).to.be.above(0);
        });
        callback();
    });
});