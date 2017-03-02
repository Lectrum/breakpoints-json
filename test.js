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
            wrongPropertyType.push(`${property} value in ${breakpoint}`);
        }
    }
    for (const item in keys) {
        if (views[breakpoint].hasOwnProperty(keys[item]) === false) {
            loseRequiredProperty.push(`${keys[item]} in ${breakpoint}`);
        }
    }
}

wrongPropertyType.length ?
    console.log(`${wrongPropertyType} should be a string`) :
    console.log('PropertyType is OK');

wrongViewsType.length ?
    console.log(`${wrongViewsType} in each breakpoints should be an object`) :
    console.log('Views Type OK');

loseRequiredProperty.length ?
    console.log(`You lose some of the required properties ${loseRequiredProperty}`) :
    console.log('Required Properties is OK');
