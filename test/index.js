'use strict';

const chai  = require('chai');
const should = chai.should();
const LazyRegex = require("../index.js");
const LazyRegexp = LazyRegex();
const OneOrMore = LazyRegex();
const Log = LazyRegex();
const ZeroOrMore = LazyRegex();

describe('#LazyRegex', function() {
  it('return Hello World', function() {
    Log.log('Hello World').compile().should.equal('Hello World');
  });
  
  it('return b*', function() {
    ZeroOrMore.zeroOrMore('b').compile().should.equal('b*');
    LazyRegexp.log('Hello World').compile().should.equal('Hello World');
  });

  it('return a+', function() {
    OneOrMore.oneOrMore("a").compile().should.equal('a+');
  });
});