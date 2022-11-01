

// let addOp = function (n1: number, n2: number) {
//     return n1 + n2;
// }

// let subtractOp = function (n1: number, n2: number) {
//     return n1 - n2;
// }

// let MultiplyOp = function (n1: number, n2: number) {
//     return n1 * n2;
// }

// let divideOp = function (n1: number, n2: number) {
//     return n1 / n2;
// }

type MathOperator = (n1: number, n2: number) => number;
let powerOp: MathOperator = function (n1: number, n2: number): number {
    return n1 ** 2;
};

let powerOpWithNoParamsAnnotation: MathOperator = function (n1, n2) {
    return n1 ** n2;
};

type PersonInfo = {
    name: string,
    age: number,
    hasPet: boolean
};

let infoAboutMaxwell: PersonInfo = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
};

