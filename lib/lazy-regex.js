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
		
		_expression: "",
		
        log: function log(params) {
			this._expression += params || "";
			return this;
        },
	
		compile: function compile() {
			return this._expression;
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




