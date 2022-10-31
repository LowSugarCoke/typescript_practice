"use strict";
const message = "hello world";
function mayReturnEitherStringOrNumber(b) {
    if (b) {
        return '20';
    }
    else {
        return 20;
        ;
    }
}
const age = mayReturnEitherStringOrNumber(false);
console.log(typeof age);
const ageAsString = mayReturnEitherStringOrNumber(true);
console.log(typeof ageAsString);
