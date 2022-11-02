"use strict";
class CircleGeometry {
    constructor(radius) {
        this.radius = radius;
        this.PI = 3.14;
    }
    area() {
        return this.PI * (this.radius ** 2);
    }
    circumference() {
        return 2 * this.PI * this.radius;
    }
}
const myCircle = new CircleGeometry(2);
console.log(myCircle.area());
console.log(myCircle.circumference());
class StaticCircleGeometry {
    static area(radius) {
        return StaticCircleGeometry.PI * (radius ** 2);
    }
    static circumference(radius) {
        return 2 * StaticCircleGeometry.PI * radius;
    }
}
StaticCircleGeometry.PI = 3.14;
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
