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
const ageAsInt = mayReturnEitherStringOrNumber(false);
console.log(typeof ageAsInt);
const ageAsString = mayReturnEitherStringOrNumber(true);
console.log(typeof ageAsString);
