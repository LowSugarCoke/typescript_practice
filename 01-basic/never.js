"use strict";
let executesForever = function forever() {
    while (true) { }
};
const randomNumber = Math.random() * 10;
let probablyExecutesForever = function (num) {
    while (num > 5) {
    }
};
probablyExecutesForever(randomNumber);
probablyExecutesForever(6);
probablyExecutesForever(4);
let probablyThrowsError = function (num) {
    if (num <= 0) {
        throw new Error('Not a positive number, go to hell!');
    }
    return num;
};
