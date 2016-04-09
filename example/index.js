/*!
 * lazy-regex
 * MIT Licensed
 */

'use strict';

const LazyRegex = require("../index.js");

console.log(
	LazyRegex()
		.log("Hello World")
		.log(" from Nigeria")
		.compile()
);