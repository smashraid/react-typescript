const chai = require('chai')
var sinon = require('sinon')
const expect = chai.expect;
const should = chai.should();
const stub = sinon.stub;
const assert = chai.assert;

const { By, until, WebElement } = require('selenium-webdriver');
const { defineSupportCode } = require('cucumber');
const { removeDoubleQuotes, readTable, setInput, setSelect, submitForm } = require("../support/helper");

defineSupportCode(function ({ Given, When, Then }) {
    Given('I navigate to {stringInDoubleQuotes}', function (stringInDoubleQuotes) {
        return this.driver.get(removeDoubleQuotes(stringInDoubleQuotes));
    });
    Given('use the following data', function (table) {
        // let driver = this.driver;
        // table.rawTable.forEach(function (element) {
        //     let name = "select[name='" + removeDoubleQuotes(element[0]) + "'] option[value='" + removeDoubleQuotes(element[1]) + "']";
        //     var query = driver.wait(until.elementLocated(By.css(name)));
        //     query.click();
        //     //setSelect(driver, element[0], element[1]);
        // }, this);       
        // callback(); 
        return readTable(this.driver, table);
    });
    Given('I click on Get My Quote with id {stringInDoubleQuotes}', function (stringInDoubleQuotes) {
        return this.driver.findElement(By.id(stringInDoubleQuotes)).click();
    });
    Given('I should see a coverage with id {stringInDoubleQuotes}', function (stringInDoubleQuotes) {
        return this.driver.findElement(By.id(stringInDoubleQuotes)).getText().then(function (text) {
            let coverage = parseFloat(text);
            expect(coverage).to.be.above(0);
        });
    });

    Given('I click on Begin your Application with id {stringInDoubleQuotes}', function (stringInDoubleQuotes) {
        return this.driver.findElement(By.id(stringInDoubleQuotes)).click();
    });
    Given('I fill basic info form with the following data', function (table) {
        //let driver = this.driver;
        // table.rawTable.forEach(function (element) {
        //     let name = element[2] + "[name='" + removeDoubleQuotes(element[0]) + "']";
        //     if (element[2] === "select") {
        //         name = name + " option[value='" + removeDoubleQuotes(element[1]) + "']";
        //         driver.findElement(By.css(name)).click();
        //     } else {
        //         driver.findElement(By.css(name)).sendKeys(element[1]);
        //     }
        // }, this);
        return readTable(this.driver, table);
    });
    When('i click on continue', function () {
        return submitForm(this.driver);
    });
    When('i will see address validation message', function () {
        return this.driver.wait(until.elementLocated(By.id("a3z_data_MailAddressLine-error"))).getText().then(function (text) {
            expect(text).to.be.eq("Please enter valid address. Please try again or click the Continue button to accept the address as entered.");
        });
    });


    When('i click on continue again', function () {
        return submitForm(this.driver);
    });
    Then('i fill identification form with the following data', function (table) {
        let element = table.rawTable[0];
        let id = element[0];
        let value = element[1];
        return this.driver.findElement(By.id(id)).sendKeys(value);
    });

    Then('i will see {stringInDoubleQuotes} modal', function (stringInDoubleQuotes, callback) {        
        callback();
    });

});