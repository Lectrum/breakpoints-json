# breakpoints-json
There are presented most appropriate to modern devices breakpoints. It is lightweight and have universal JSON format that make it useful in any projects with any programming language.
-------------
## Installation ##
`$ npm install breakpoints-json`
-------------
## Usage ##
For use this package you just need to import it from 'node_modules'.
`var breakpoints = require('breakpoints-json');`
or if you use ES6
`import breakpoints from 'breakpoints-json';`
If you use babel, imported JSON should automatic transformed to JavaScript object.
--------------
## Changes ##
Our breakpoints was diligently selected. But if you want change some of our proposed sizes, you can do it manually. Look to `node_modules/breakpoint-json.breakpoints.json`. You can change min and max value, add or delete some of breakpoints. Be careful and look that your min and max values not crossing one to another.
--------------
## Test ##
