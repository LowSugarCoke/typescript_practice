const message: string = "hello world";

function mayReturnEitherStringOrNumber(b: boolean): string | number {
    if (b) {
        return '20';
    } else {
        return 20;;
    }
}

const ageAsInt = <number>mayReturnEitherStringOrNumber(false);
console.log(typeof ageAsInt);

const ageAsString = mayReturnEitherStringOrNumber(true) as string;
console.log(typeof ageAsString);





