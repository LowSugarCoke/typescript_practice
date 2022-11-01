let numberss = [1, 2, 3, 4, 5];
let mappedNumbers = numberss.map(num => num * 2);


type Vehicle = [string, string, string, Date]

let BMWMotor: Vehicle = ['BMW', 'motorcycle', 'silver', new Date(2019, 2, 17)];
let JaguarOffRoad = <Vehicle>['Jaguar', 'off-road', 'royal-blue', new Date(2019, 1, 9)];
let ToyotaRV = ['Toyota', 'recreational', 'ivory-white', new Date(2019, 3, 15)] as Vehicle;

// Array
type arrayTypeRepresentation = (string | Date)[];

// Tuples
type tupleTypeRepresentation = [string, string, string, Date];

