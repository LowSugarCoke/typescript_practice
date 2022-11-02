type Dictionary = {
    [propName: string]: string,
};

interface StringTypedList {
    [index: number]: string;
}

let normalDictionary: Dictionary = {
    hello: 'world',
    thisFeature: 'is crazy'
};

// let wrongDictionary:Dictionary = {
//     hello:123,
//     thisFeature:true,
//     withFunction(){console.log('Wrong type!');},
//     nestedDictionary:{hello:123}
// }

let stringTypedArray: StringTypedList = {
    123: 'Hello',
    [456]: 'Hi',
};

let emptyStringTypedArray: StringTypedList = {};

// let stringTypedArrayLiteral: StringTypedList = [1, 2, 3];

let emptyStringTypedArray2: StringTypedList = [];

stringTypedArray[0];
stringTypedArray[1];

// let wrongStringTypedArray: StringTypedList = {
//     message: 'Hello',
//     thisFeature: true
// }

// Read only
type TAccountUserWithReadonlyProperty = {
    readonly email: string,
    readonly password: string,
    name?: string,
    age?: number,
}

interface IACoountUserWithReadonlyProperty {
    readonly email: string;
    readonly password: string;
    name?: string;
    age?: number;
}

let sampleAccount: TAccountUserWithReadonlyProperty = {
    email: 'maxwell@example.com',
    password: '<hashed-password>',
    name: 'Maxwell'
};

sampleAccount.email;
// sampleAccount.email = 'happy@example.com';

// Hybrid Type Interface
interface Counter {
    // pure function
    (start: number): void;

    increment(): number;
    reset(): void;
    value: number;
}

function createCounter(): Counter {
    let value: number;
    let initializedNumber: number;

    const counter = (function (startNumber: number) {
        initializedNumber = startNumber;
        value = startNumber;
    }) as Counter;

    counter.increment = function () {
        value++;
        return value;
    };

    counter.reset = function () {
        value = initializedNumber;
    }

    Object.defineProperty(counter, 'value', {
        get() { return value; }
    });

    return counter;
}

const counter: Counter = createCounter();

counter(5);
console.log(counter.value);

counter.increment();
counter.increment();
counter.increment();
console.log(counter.value);
counter.reset();
console.log(counter.value);

