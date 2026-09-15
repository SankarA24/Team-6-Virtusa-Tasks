abstract class Shape {
    constructor(protected name: string) {}
    abstract area(): number;
    abstract perimeter(): number;
    log() {
        console.log(`${this.name}: ${this.area().toFixed(2)} :: ${this.perimeter().toFixed(2)}`);
    }
}
class Circle extends Shape {
    private r: number;
    constructor(radius: number) {
        super('Circle');
        this.r = radius;
    }
    area(): number {
        return Math.PI * this.r * this.r;
    }
    perimeter() {
        return 2 * Math.PI * this.r;
    }
}
class Rectangle extends Shape {
    private w: number;
    private h: number;
    constructor(width: number, height: number) {
        super('Rectangle');
        this.w = width;
        this.h = height;
    }
    area(): number {
        return this.w * this.h;
    }
    perimeter(): number {
        return 2 * (this.w + this.h);
    }
}
const shapes = [new Circle(5), new Rectangle(4, 2)];
shapes.forEach(s => s.log());
console.log(new Circle(1).area());
