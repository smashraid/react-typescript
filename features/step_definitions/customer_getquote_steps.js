// const chai = require('chai')
// var sinon = require('sinon')
// const expect = chai.expect;
// const should = chai.should();
// const stub = sinon.stub;
// const assert = chai.assert;
const { By, until, WebElement } = require('selenium-webdriver');
const { defineSupportCode } = require('cucumber');
const { removeDoubleQuotes } = require("../support/helper");

defineSupportCode(function ({ Given, When, Then }) {
    Given('I navigate to {url}', function (url) {
        // Write code here that turns the phrase above into concrete actions
        return this.driver.get(removeDoubleQuotes(url));
    });
    Given('I select state with value {value} and name {select}', function (value, select) {
        // Write code here that turns the phrase above into concrete actions

        //callback();
        //#FormStarted > div > div:nth-child(2) > div.col-lg-4.col-md-12 > select > option:nth-child(2)
        // select = selectInDoubleQuotes.replace(/['"]+/g, '');
        // value = valueInDoubleQuotes.replace(/['"]+/g, '');
        let name = "select[name='" + removeDoubleQuotes(select) + "'] option[value='" + removeDoubleQuotes(value) + "']";
        return this.driver.findElement(By.css(name)).click();


        // this.driver.findElements(By.css("select")).then(function (elements) {
        //     var xxx = elements[0].getAttribute("name").then(function (text) {
        //         var yyy = text;
        //         var zzz = text.length;
        //     });            
        // });


        //return this.driver.findElement(By.xpath('//*[@id="FormStarted"]/div/div[2]/div[1]/select/option[2]')).click();
    });
    Given('I select month with value {value} and name {select}', function (value, select) {
        // Write code here that turns the phrase above into concrete actions
        let name = "select[name='" + removeDoubleQuotes(select) + "'] option[value='" + removeDoubleQuotes(value) + "']";
        return this.driver.findElement(By.css(name)).click();
    });
    Given('I select day with value {value} and name {select}', function (value, select) {
        // Write code here that turns the phrase above into concrete actions
        let name = "select[name='" + removeDoubleQuotes(select) + "'] option[value='" + removeDoubleQuotes(value) + "']";
        return this.driver.findElement(By.css(name)).click();
    });
    Given('I select year with value {value} and name {select}', function (value, select) {
        // Write code here that turns the phrase above into concrete actions
        let name = "select[name='" + removeDoubleQuotes(select) + "'] option[value='" + removeDoubleQuotes(value) + "']";
        return this.driver.findElement(By.css(name)).click();
    });
    // Given('I wait for {time} sec', function (time, callback) {
    //     // Write code here that turns the phrase above into concrete actions
    //     //let name = "select[name='" + removeDoubleQuotes(select) + "'] option[value='" + removeDoubleQuotes(value) + "']";
    //     // let driver = this.driver;
    //     // return driver.wait(function () {
    //     //     return driver.findElements(By.css("#ddlFaceAmount option")).then(function (elements) {
    //     //         return elements.length > 0
    //     //     })
    //     // }, 50000);
    //     setTimeout(function () { callback }, 3000);
    //     return;
    // });
    Given('I select gender with value {value}  and name {select}', function (value, select) {
        // Write code here that turns the phrase above into concrete actions
        let name = "select[name='" + removeDoubleQuotes(select) + "'] option[value='" + removeDoubleQuotes(value) + "']";
        return this.driver.findElement(By.css(name)).click();
    });
    Given('I select tobacco with value {value} and name {select}', function (value, select) {
        // Write code here that turns the phrase above into concrete actions

        let name = "select[name='" + removeDoubleQuotes(select) + "'] option[value='" + removeDoubleQuotes(value) + "']";
        return this.driver.findElement(By.css(name)).click();
    });

    Given('I select term with value {value} and name {select}', function (value, select) {
        // Write code here that turns the phrase above into concrete actions        
        let name = "select[name='" + removeDoubleQuotes(select) + "'] option[value='" + removeDoubleQuotes(value) + "']";
        var query = this.driver.wait(until.elementLocated(By.css(name)));
        query.click();

    });
    Given('I select amount with value {value} and name {select}', function (value, select) {
        // Write code here that turns the phrase above into concrete actions
        let name = "select[name='" + removeDoubleQuotes(select) + "'] option[value='" + removeDoubleQuotes(value) + "']";
        var query = this.driver.wait(until.elementLocated(By.css(name)));
        query.click();
    });
    When('I click on Get My Quote with id {stringInDoubleQuotes}', function (stringInDoubleQuotes) {
        // Write code here that turns the phrase above into concrete actions
        this.driver.findElement(By.id(stringInDoubleQuotes)).click();
    });
    Then('I should see a coverage', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback();
    });
});