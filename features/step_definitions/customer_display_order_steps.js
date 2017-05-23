const chai = require('chai')
var sinon = require('sinon')
const expect = chai.expect;
const should = chai.should();
const stub = sinon.s
const assert = chai.assert;
var {defineSupportCode} = require('cucumber');
var seleniumWebdriver = require('selenium-webdriver');

defineSupportCode(function ({Given, When, Then}) {
    Given('that the order is empty', () => {
        // Write code here that turns the phrase above into concrete actions
        let foo = "bar";
        foo.should.be.a('string');
        foo.should.equal('bar');
        //callback(null, 'pending');
        //return 'pending';
        
    });
    When('the customer displays the order', (callback) => {
        // Write code here that turns the phrase above into concrete actions
        //callback(null, 'pending');
        callback();
    });
    Then('no order items will be shown', (callback) => {
        // Write code here that turns the phrase above into concrete actions
        callback();
    });
    Then('{stringInDoubleQuotes} will be shown as total price', (stringInDoubleQuotes, callback) => {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
    Then('there will only be possible to add a beverage', (callback) => {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
});