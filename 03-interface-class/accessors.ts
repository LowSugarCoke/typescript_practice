class CircleGeometryV2 {
    public readonly PI: number = 3.14;

    constructor(private radius: number) { }

    get area() {
        return this.PI * (this.radius ** 2);
    }

    get radius_() {
        return this.radius
    }

    set area(value: number) {
        this.radius = (value / this.PI) ** 0.5;
    }

    public circumference(): number {
        return 2 * this.PI * this.radius;
    }
}

const randomCircle = new CircleGeometryV2(2);
console.log(randomCircle)
randomCircle.area = 5;
console.log(randomCircle)
randomCircle.radius_