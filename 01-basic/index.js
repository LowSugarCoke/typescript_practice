"use strict";
let MyName = "JackLee";
let age = 20;
let hasPet = false;
let nothing = undefined;
let nothingLiterally = null;
// Warning
// myName = null;
// age = true;
// hasPet = "Doggie & Kitty";
nothing = 'something';
nothingLiterally = 'Literally has something';
nothing = true;
nothingLiterally = 42;
nothing = 'can be anything!?';
nothingLiterally = 'Literally can be something crazy';
// any
let messageToSend;
messageToSend = 'Cat is afraid of cucumbers...';
messageToSend = 101101110101010101111;
// undefined
let absoluteNothing = undefined;
let literallyAbsoluteNothing = null;
// Warning
// absoluteNothing = 123;
// literallyAbsoluteNothing = 'I can't live in this variable now...'
// string
let canBeNullableString;
canBeNullableString = 'hello';
let myString = canBeNullableString;
// if canBeNullableString here, it will be warning
// canBeNullableString = 'hello';
// union
let absolutelyEitherNullOrString = null;
absolutelyEitherNullOrString = 'Assigned with strong...';
absolutelyEitherNullOrString = null;
absolutelyEitherNullOrString = 'Assigned with string, again...';
// object
let info = {
    name: 'Maxwell',
    age: 20,
    hasPet: false
};
let someone = {
    knows: undefined,
    identify: null
};
info.name = "JackLee";
info.age = 28;
info.hasPet = true;
someone.knows = undefined;
someone.identify = null;
// Warning
// info.name = false;
// info.age = "20";
// info.hasPet = "false";
// someone.knows = 123;
// someone.identify = 123;
// object override
info = {
    name: 'JackLee',
    age: 28,
    hasPet: true
};
// Warning
// info = {
//     name: 'JackLee',
//     age: 28
// }
// Warning
// info = {
//     name: 'JackLee',
//     age: 28,
//     hasPet: true,
//     like: true
// }
// Object annotation
let justAndObject = { hello: 'World' };
// justAndObject.hello = "Jack";
// justAndObject.hello = null;
justAndObject = { goodbye: 'Hee' };
// justAndObject.newProp = 123;
// justAndObject = 123;
justAndObject = [1, '2', 3, '4', 5, true, { hello: 'world' }];
justAndObject = function () { console.log("hello world"); };
justAndObject = new Object();
justAndObject = new String("Hello world");
justAndObject = new Number(123);
justAndObject = Object;
justAndObject = Array;