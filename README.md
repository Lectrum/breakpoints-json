# breakpoints-json

[![Status Maintained](https://img.shields.io/badge/status-maintained-brightgreen.svg?style=flat)](https://github.com/Lectrum/breakpoints-json/pulse)
[![npm version](https://badge.fury.io/js/breakpoints-json.svg)](https://badge.fury.io/js/breakpoints-json)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Lectrum/breakpoints-json/pulls)
[![Build Status](https://travis-ci.org/Lectrum/breakpoints-json.svg?branch=master)](https://travis-ci.org/Lectrum/breakpoints-json)
[![Gitter Chat](https://img.shields.io/badge/chat-on%20gitter-blue.svg?style=flat)]()
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/lectrumhq)

*There are presented most appropriate to modern devices breakpoints (look on the picture below)*. It is lightweight and has a universal JSON format that makes it useful in any projects with any programming language.

![breakpoints-json 3](https://cloud.githubusercontent.com/assets/26002528/25903209/71667874-35a4-11e7-84d3-e8c7e3259393.png)

## Installation

You can install `breakpoints-json` using npm:

`npm install -D breakpoints-json`

## Usage

To use this package you just need to import it from 'node_modules':

`import breakpoints from 'breakpoints-json';`

or if you don`t use ES6:

`var breakpoints = require('breakpoints-json');`.

If you use babel, imported JSON should automatic transformed to JavaScript object.

Here is a simple example written in native JavaScript. It is a `check()` function, which returns a breakpoint (type Object) to you that corresponds to your current window size.

```javascript
import breakpoints from 'breakpoints-json';

export default const check = (size) => {
    let result = false;

    for (let key in breakpoints) {
        const item = breakpoints[key];
        const max = item.max;
        const min = item.min;

        if (size <= max && size >= min) {
            result = item;
        }
    }

    return result;
};
```

This package is polymorphic. It can be used with native JS, any tool/library or any other programming language. It might be useful for building some logic according to different devices. You can easily make conditional rendered component (one component for mobile and another for desktop and tablet devices) in React.js as in the example below. We will use our `check()` function for this task:

```JSX
import breakpoints from 'breakpoints-json';
import check from './check.js';

const current = window.innerWidth;
const name = check(current).name;
const phonePortrait = breakpoints.phonePortrait.name;
const phoneLandscape = breakpoints.phoneLandscape.name;

const conditionalRender = () => {
    return name === phonePortrait || name === phoneLandscape
    ?
        <AppMobile />
    :
        <AppDesktop />;
};
```

## Contributing

If you want to suggest an improvement to this package feel free to fork this repo. To run tests execute the following in your terminal:

`npm test`.

Then send us PR. It is an excellent possibility to giving your karma little push, and you'll help us a lot.
