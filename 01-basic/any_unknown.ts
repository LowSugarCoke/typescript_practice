let anyType: any;
let unknownType: unknown;

anyType = 123;
anyType = 'Any string';
anyType = true;
anyType = null;
anyType = undefined;
anyType = { hello: 'world' };
anyType = [1, true, null, 'Any string in array'];
anyType = function () { console.log('Hello!'); };
anyType = new Object();

unknownType = 123;
unknownType = 'Unknown string';
unknownType = true;
unknownType = null;
unknownType = undefined;
unknownType = { hello: 'world' };
unknownType = [1, true, null, 'Unknown string in array'];
unknownType = function () { console.log('Hello!'); };
unknownType = new Object();

let isAny: any;
let isUnknown: unknown;

let isNumber: number;
let isString: string;
let isBoolean: boolean;
let isNull: null;
let isUndefined: undefined;
let isAKindOfObjectLiteral: { name: string, age: number };
let isAKindOfArray: number[];
let isAKindOfFunction: () => void;
let isAKindOfObject: Object;

// any
isNumber = isAny;
isString = isAny;
isBoolean = isAny;
isNull = isAny;
isUndefined = isAny;
isAKindOfObjectLiteral = isAny;
isAKindOfArray = isAny;
isAKindOfFunction = isAny;
isAKindOfObject = isAny;
isAny = isAny;
isUnknown = isAny;

// unknown
// isNumber = isUnknown;
// isString = isUnknown;
// isBoolean = isUnknown;
// isNull = isUnknown;
// isUndefined = isUnknown;
// isAKindOfObjectLiteral = isUnknown;
// isAKindOfArray = isUnknown;
// isAKindOfFunction = isUnknown;
// isAKindOfObject = isUnknown;
// isAny = isUnknown;
// isUnknown = isUnknown;