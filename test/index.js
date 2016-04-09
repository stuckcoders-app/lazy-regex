'use strict';

const chai  = require('chai');
const should = chai.should();
const LazyRegex = require("../index.js");
const LazyRegexp = LazyRegex();

describe('#escape', function() {
  it('return Hello World', function() {
    LazyRegexp.log('Hello World').should.equal('Hello World');
  });
});