'use strict';

const chai  = require('chai');
const should = chai.should();
const LazyRegex = require("../index.js");
const LazyRegexp = LazyRegex();
const OneOrMore = LazyRegex();

describe('#escape', function() {
  it('return Hello World', function() {
    LazyRegexp.log('Hello World').compile().should.equal('Hello World');
  });
});

describe('#oneOrMore', function() {
  it('return a+', function() {
    OneOrMore.oneOrMore("a").compile().should.equal('a+');
  });
});