"use strict";
class CircleGeometryV2 {
    constructor(radius) {
        this.radius = radius;
        this.PI = 3.14;
    }
    get area() {
        return this.PI * (this.radius ** 2);
    }
    get radius_() {
        return this.radius;
    }
    set area(value) {
        this.radius = (value / this.PI) ** 0.5;
    }
    circumference() {
        return 2 * this.PI * this.radius;
    }
}
const randomCircle = new CircleGeometryV2(2);
console.log(randomCircle);
randomCircle.area = 5;
console.log(randomCircle);
randomCircle.radius_;
