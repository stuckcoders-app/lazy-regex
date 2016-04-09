'use strict';

const chai  = require('chai');
const should = chai.should();
const LazyRegex = require("../index.js");
const Log = LazyRegex();
const ZeroOrMore = LazyRegex();

describe('#LazyRegex', function() {
  it('return Hello World', function() {
    Log.log('Hello World').compile().should.equal('Hello World');
  });
  
  it('return b*', function() {
    ZeroOrMore.zeroOrMore('b').compile().should.equal('b*');
  });
});