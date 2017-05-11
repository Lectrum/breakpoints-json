# breakpoints-json

[![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/breakpoints-json)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![TeamCity CodeBetter](https://img.shields.io/teamcity/codebetter/bt428.svg?style=flat-square)]()
[![Gitter Chat](https://img.shields.io/badge/chat-on%20gitter-blue.svg)]()
[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](https://twitter.com/lectrumhq)

There are presented most appropriate to modern devices breakpoints (look on the picture below). It is lightweight and have universal JSON format that make it useful in any projects with any programming language.

![breakpoints-json 3](https://cloud.githubusercontent.com/assets/26002528/25903209/71667874-35a4-11e7-84d3-e8c7e3259393.png)

## Installation

`npm install -D breakpoints-json`

## Usage

For use this package you just need to import it from 'node_modules'.

`import breakpoints from 'breakpoints-json';`

or if you don`t use ES6

`var breakpoints = require('breakpoints-json');`

If you use babel, imported JSON should automatic transformed to JavaScript object.

Here is simple example on native JavaScript. It is a function `check()`, which returned to you breakpoint (type Object) that corresponds to your current window size.

```
import breakpoints from 'breakpoints-json';

export default const check = (size) => {
    let result = false;

    for (let key in breakpoints) {
        let item = breakpoints[key];
        const max = item.max;
        const min = item.min;

        if (size <= max && size >= min) {
        result = item;
        }
    }

    return result;
};
```

This package is polymorphic. It can be used with native JS, any tool/library or any other programming language. It might be useful for build some logic according to different devices. For example, you can easy make conditional rendered component (one Component for mobile and another for Desktop and Tablet devices) in React.js as on example below. We will use our function check() for this task:

```
import breakpoints from 'breakpoints-json';
import check from './check.js';

const current = window.innerWidth;
const name = check(current).name;
const phonePortrait = breakpoints.phonePortrait.name;
const phoneLandscape = breakpoints.phoneLandscape.name;

const conditionalRender = () => {
    return (name === phonePortrait || name === phoneLandscape)
    ?
        <AppMobile />
    :
        <AppDesktop />;
}
```

## Contributing

If you want to suggest an improvement of our package feel free to fork this repo. In order to run tests execute the following in terminal: npm test. And then send us PR. It is a very good possibility to receive plus 100 to your karma and you'll help us a lot.
