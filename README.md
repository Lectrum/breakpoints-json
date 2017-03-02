# breakpoints-json

There are presented most appropriate to modern devices breakpoints. It is lightweight and have universal JSON format that make it useful in any projects with any programming language.

## Installation

`npm install breakpoints-json`

## Usage

For use this package you just need to import it from 'node_modules'.

`import breakpoints from 'breakpoints-json';`

or if you don`t use ES6

`var breakpoints = require('breakpoints-json');`

If you use babel, imported JSON should automatic transformed to JavaScript object.

For example you can check presence of some field in your breakpoints.

```
for (const breakpoint in views) {
    // some logic
}
```

It might be useful for build some logic according to different devices.

## Test

When you make any changes to `breakpoints-json` please make sure that you do everything right. For this you can run `test.js`. 

Go to package directory

`cd node_modules/breakpoints-json`

and run test

`npm test`
