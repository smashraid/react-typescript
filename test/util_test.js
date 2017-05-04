const assert = require("assert");
const chai = require('chai')
var sinon = require('sinon')
const expect = chai.expect;
const should = chai.should();
const stub = sinon.s

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    });
  });
});

