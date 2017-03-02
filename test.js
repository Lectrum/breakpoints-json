const views = require('./breakpoints');

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
            wrongPropertyType.push(views[breakpoint][property]);
        }
    }
    for (const item in keys) {
        if (views[breakpoint].hasOwnProperty(keys[item]) === false) {
            loseRequiredProperty.push(`${keys[item]} in ${breakpoint}breakpoint`);
        }
    }
}

if (wrongPropertyType !== []) {
    console.log(`${wrongPropertyType} should be a string`);
} else {
    console.log('PropertyType is OK');
}

if (wrongViewsType !== []) {
    console.log(`${wrongViewsType} in each breakpoints should be an object`);
} else {
    console.log('Views Type OK');
}

if (loseRequiredProperty !== []) {
    console.log(`You lose some of the required properties ${loseRequiredProperty}`);
} else {
    console.log('Required Properties is OK');
}
