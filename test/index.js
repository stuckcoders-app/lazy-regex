'use strict';

const chai  = require('chai');
const should = chai.should();
const LazyRegex = require("../index.js");
const OneOrMore = LazyRegex();
const Log = LazyRegex();
const ZeroOrMore = LazyRegex();
const oneorMoreAndZeroOrMore = LazyRegex();

describe('#LazyRegex', function() {
  it('return /Hello World/', function() {
    Log
		.log('Hello World')
		.compile().should.equal('/Hello World/');
  });
  
  it('return /b*/', function() {
    ZeroOrMore
		.zeroOrMore('b')
		.compile().should.equal('/b*/');
  });

  it('return /a+/', function() {
    OneOrMore
		.oneOrMore("a")
		.compile().should.equal('/a+/');
  });
  
  it('return /a+b*/', function() {
    oneorMoreAndZeroOrMore
		.oneOrMore("a")
		.zeroOrMore("b")
		.compile().should.equal('/a+b*/');
  });
});