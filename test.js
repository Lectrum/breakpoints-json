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

    if (!wrongPropertyType.length) {
        console.log(`${wrongPropertyType} should be an object`);
    } else {
        console.log('PropertyType is OK');
    }

    if (!wrongViewsType.length) {
        console.log(`${wrongViewsType} in each breakpoints should be a string`);
    } else {
        console.log('Views Type OK');
    }

    if (!loseRequiredProperty.length) {
        console.log(`${loseRequiredProperty} should be in each breakpoints`);
    } else {
        console.log('Required Properties is OK');
    }
}
