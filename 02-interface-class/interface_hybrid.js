"use strict";
let normalDictionary = {
    hello: 'world',
    thisFeature: 'is crazy'
};
// let wrongDictionary:Dictionary = {
//     hello:123,
//     thisFeature:true,
//     withFunction(){console.log('Wrong type!');},
//     nestedDictionary:{hello:123}
// }
let stringTypedArray = {
    123: 'Hello',
    [456]: 'Hi',
};
let emptyStringTypedArray = {};
// let stringTypedArrayLiteral: StringTypedList = [1, 2, 3];
let emptyStringTypedArray2 = [];
stringTypedArray[0];
stringTypedArray[1];
let sampleAccount = {
    email: 'maxwell@example.com',
    password: '<hashed-password>',
    name: 'Maxwell'
};
sampleAccount.email;
function createCounter() {
    let value;
    let initializedNumber;
    const counter = (function (startNumber) {
        initializedNumber = startNumber;
        value = startNumber;
    });
    counter.increment = function () {
        value++;
        return value;
    };
    counter.reset = function () {
        value = initializedNumber;
    };
    Object.defineProperty(counter, 'value', {
        get() { return value; }
    });
    return counter;
}
const counter = createCounter();
counter(5);
console.log(counter.value);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.value);
counter.reset();
console.log(counter.value);
