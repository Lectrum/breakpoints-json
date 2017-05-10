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

You can easy work with this package in any applications, which are written on any programming language.

Here is simple example on native JavaScript. It shows how to find current breakpoint of your browser window:

```
    for (const key in breakpoints) {
        if (window.innerWidth <= breakpoints[key].max && window.innerWidth >= breakpoints[key].min) {
            console.log('This is your current window size: ', window.innerWidth);
            console.log('This is your current breakpoint: ', breakpoints[key]);
        }
    }
```



```
for (const property in breakpoints) {
    // some logic
}
```

It might be useful for build some logic according to different devices.

## Contributing

If you want to suggest an improvement of our package fell free to fork this repo. In order to run tests execute the following in terminal: npm test. And then send us PR. It is a very good possibility to receive plus 100 to your karma and you'll help us a lot.
