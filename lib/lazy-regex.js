/*!
 * lazy-regex
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

var regex = require('./regex');

/**
* Define the LazyRegex class.
* @class
*/
(function lazyRegexp() {

    /**
    * I am the constructor function.
    * @constructor
    */
    function LazyRegex() {
        
    }

    /**
    * Define the class methods.
    */
    LazyRegex.prototype = {
        log: function log(params) {
            return params;
        }
    };
    
    /**
    * @return {LazyRegex} Returns a new instance of LazyRegex
    */
    function createLazyRegex() {
        return new LazyRegex();
    }
    
    module.exports = createLazyRegex;
    
}(this));




