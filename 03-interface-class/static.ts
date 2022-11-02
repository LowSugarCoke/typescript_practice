class CircleGeometry {
    private PI: number = 3.14;

    constructor(public radius: number) { }

    public area(): number {
        return this.PI * (this.radius ** 2);
    }

    public circumference(): number {
        return 2 * this.PI * this.radius;
    }
}

const myCircle = new CircleGeometry(2);

console.log(myCircle.area());

console.log(myCircle.circumference());

class StaticCircleGeometry {
    private static PI: number = 3.14;

    static area(radius: number): number {
        return StaticCircleGeometry.PI * (radius ** 2);
    }

    static circumference(radius: number): number {
        return 2 * StaticCircleGeometry.PI * radius;
    }
}

const areaFromStaticMethod = StaticCircleGeometry.area(2);
const circumferenceFromStaticMethod = StaticCircleGeometry.circumference(2);

// console.log(`
// Using CircleGeometry Class calculate radius 2 case:
// Area: ${areaFromObj}
// Circumference: ${circumferenceFromObj}

// Using StaticCircleGeometry Class calculate radius 2 case:
// Area: ${areaFromStaticMethod}
// Circumference: ${circumferenceFromStaticMethod}
// `);


console.log(`
Using StaticCircleGeometry Class calculate radius 2 case:
Area: ${areaFromStaticMethod}
Circumference: ${circumferenceFromStaticMethod}
`);


