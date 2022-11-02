interface PersonInfo {
    name: string;
    age: number;
    hasPet: boolean;
}

class CustomPersonInfo {
    name?: string;
    age?: number;
    hasPet?: boolean;

    constructor(name: string, age: number, hasPet: boolean) {
        this.name = name;
        this.age = age;
        this.hasPet = hasPet;
    }

    printInfo() {
        console.log(`
        Name: ${this.name}
        Age: ${this.age}
        Owns a pet? ${this.hasPet}
        `);
    }
}

let customInfo1 = new CustomPersonInfo('Toby', 32, true);
console.log(customInfo1);
customInfo1.printInfo();

