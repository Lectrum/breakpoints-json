import views from './breakpoints';

const keys = ['name', 'min', 'max'];
const wrongViewsType = [];
const wrongPropertyType = [];
const loseRequiredProperty = [];

for (const breakpoint in views) {
    if (typeof views[breakpoint] !== "object") {
        wrongViewsType.push(breakpoint);
    }
    for (const property in views[breakpoint]) {
        if (typeof views[breakpoint][property] !== "string") {
            wrongPropertyType.push(property);
        }
        for (const item in keys) {
            if (!Object.prototype.hasOwnProperty.call(item, views[breakpoint])) {
                loseRequiredProperty.push(item);
            }
        }
    }
}

if (!wrongPropertyType.length) {
    throw new SyntaxError(`${wrongPropertyType} should be an object`);
}

if (!wrongViewsType.length) {
    throw new SyntaxError(`${wrongViewsType} in each breakpoints should be a string`);
}

if (!loseRequiredProperty.length) {
    throw new SyntaxError(`${loseRequiredProperty} should be in each breakpoints`);
}
