## lazy-regex

A small library providing regular expressions in simple English

## Installation

  npm install lazy-regex --save

## Usage

  ```javascript
  const LazyRegex = require("lazy-regex");
  const LazyRegexp = LazyRegex();

  const params = 'Hello World';
  const sample = LazyRegexp
	  				.log(params)
					.compile();

  console.log(sample);
  ```

## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release