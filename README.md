
# breakpoints-json

[![Status Maintained](https://img.shields.io/badge/status-maintained-brightgreen.svg?style=flat)](https://github.com/Lectrum/breakpoints-json/pulse)
[![npm version](https://badge.fury.io/js/breakpoints-json.svg)](https://badge.fury.io/js/breakpoints-json)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Lectrum/breakpoints-json/pulls)
[![Build Status](https://travis-ci.org/Lectrum/breakpoints-json.svg?branch=master)](https://travis-ci.org/Lectrum/breakpoints-json)
[![Join the chat at https://gitter.im/lectrum/breakpoints-json](https://badges.gitter.im/lectrum/breakpoints-json.svg)](https://gitter.im/lectrum/breakpoints-json?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/lectrumhq)

> Adds some magic to adaptive applications

This is a lightweight package with the most useful breakpoints in a universal JSON format. They correspond to popular modern devices (look on the picture below). We have carefully determined the best breakpoints during the last three years.

![breakpoints-json 3](https://cloud.githubusercontent.com/assets/26002528/25903209/71667874-35a4-11e7-84d3-e8c7e3259393.png)

## Installation

You can install `breakpoints-json` using npm:

`npm install --save breakpoints-json`


## Usage
This package is polymorphic. It can be used with native JavaScript, any tool/library or any other programming language.


For use this package you just need to import it from 'node_modules'.

`import breakpoints from 'breakpoints-json';`

or if you don`t use ES6:

`var breakpoints = require('breakpoints-json');`.

If you use babel, JSON should be automatically transformed to JavaScript object after you will import it.

Here is a simple example - `check()` function, which returns a breakpoint (type Object) to you that corresponds to your current window size.

```javascript
import breakpoints from 'breakpoints-json';

const check = (size) => {
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

export default check;
```

It might be useful for building some logic according to different devices. You can easily make conditional rendered component (one component for mobile and another for desktop and tablet devices) in React.js as in the example below. We will use our `check()` function for this task:

```js
import React, { Component } from 'react';
import breakpoints from 'breakpoints-json';
import check from './check.js';

export default class App extends Component {
    render () {
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

        return conditionalRender;
    }
}
```

We also created a React component in [smart-render](https://www.npmjs.com/package/smart-render) npm package that does this logic. This approach is better than writing `display: none;` in CSS. If you use this package, HTML element that should be not rendered — will not be in the DOM, in contrast to CSS `display: none;` rule (in this case HTML element will be presented in the DOM, but just not show).

## Contributing

If you want to suggest an improvement to this package, feel free to fork this repo. To run tests execute the following in your terminal:

`npm test`.

Then send us PR. It is an excellent possibility to giving your karma a little push, and you'll help us a lot.

If you enjoy this package, feel free to star it. But if you want to create your own package like this or a complicated one join our Lectrum club and we will help you. We are very fast in supporting open-source projects. You can be sure that we will help you in our [gitter](https://gitter.im/lectrum/smart-render) and [twitter](https://twitter.com/lectrumhq) within 24 hours.

## License

This project is licensed under the terms of the [MIT license](https://github.com/Lectrum/breakpoints-json/blob/master/LICENSE).
