# breakpoints-json

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

There are presented most appropriate to modern devices breakpoints (look on the picture below). It is lightweight and have universal JSON format that make it useful in any projects with any programming language.
![Devices](https://cloud.githubusercontent.com/assets/26002528/25902287/d05959bc-35a1-11e7-9df3-15346f7e07f8.png)

## Installation

`npm install -D breakpoints-json`

## Usage

For use this package you just need to import it from 'node_modules'.

`import breakpoints from 'breakpoints-json';`

or if you don`t use ES6

`var breakpoints = require('breakpoints-json');`

If you use babel, imported JSON should automatic transformed to JavaScript object.

Here is simple example on native JavaScript. It shows how to find current breakpoint of your browser window:

```
    for (const key in breakpoints) {
        if (window.innerWidth <= breakpoints[key].max && window.innerWidth >= breakpoints[key].min) {
            console.log('This is your current window size: ', window.innerWidth);
            console.log('This is your current breakpoint: ', breakpoints[key]);
        }
    }
```

This package is polymorphic. It can be used with native JS, any tool/library or any other programming language. It might be useful for build some logic according to different devices. For example, you can easy make conditional rendered component in React.js as on example below:

```
    const conditionalRender = () => {
        if (breakpoints.phonePortrait || breakpoints.phoneLandscape) {
            return <AppMobile />
        }
        else if (breakpoints.tabletPortrait || breakpoints.tabletLandscape) {
            return <AppTablet />
        }
        else {
            return <AppDesktop />
        }
    }
```

## Contributing

If you want to suggest an improvement of our package feel free to fork this repo. In order to run tests execute the following in terminal: npm test. And then send us PR. It is a very good possibility to receive plus 100 to your karma and you'll help us a lot.
