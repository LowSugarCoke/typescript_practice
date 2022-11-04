// Variables
type Primitives = number | string | boolean | null | undefined;
// Array
type PrimitiveArray = Primitives[];
// Function
type OperatorFunc = (op1: Primitives, op2: Primitives) => unknown;
// Tuples
type VehicleInfo = [string, string, string, Date];
// 
enum WeekDayEnum { Sun, Mon, Tue, Wed, Thu, Fri, Sat };
type WeekDayString = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';
type WeekDayFormat = WeekDayEnum | WeekDayString;

// Interface
enum Gender { Male, Female, Other };

// Object
interface UserInfo {
    id: number;
    name: string;

    birth: Date;
    interests: string[];

    gender: Gender;

    address: {
        country: string;
        city: string;
        postalCode: string;
    };


    logInfo(message: string): void;
}

// Function
interface UpdateRecord {
    (id: number, newRecord: UserInfo): void;
}

interface Person {
    name: string;
    age: number;
    hasPet: boolean;
}

const maxwell: Person = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
}

function printPersonInfo(person: Person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age is:${person.age}`);
    console.log(`Owns a pet? ${person.hasPet}`);
}

// printPersonInfo({
//     name: 'Maxwell',
//     age: 20,
//     hasPet: false,
//     job: 'Front-End',
//     nothingSpecial: null,
// })

let infoMaxwell = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,

    job: 'Front-End',
    nothingSpecial: null,
};

printPersonInfo(infoMaxwell);