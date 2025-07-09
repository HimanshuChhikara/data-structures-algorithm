// Many client specific interface are better than one general purpose interface.
// Client should not be forced to implement methods that they don't need

class Shape {
    area() {
        console.log("Area method must be implemented");
    }
    volume() {
        console.log("Volume method must be implemented");
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }

    // No need to implement volume for Square

}

class Cube extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return 6 * this.side * this.side; // Surface area of a cube
    }

    volume() {
        return this.side * this.side * this.side; // Volume of a cube
    }
}
// Example usage
let square = new Square(5);
let cube = new Cube(5);
// console.log("Square Area:", square.area()); // Square Area: 25
// console.log("Cube Area:", cube.area()); // Cube Area: 150
// console.log("Cube Volume:", cube.volume()); // Cube Volume: 125
// console.log("Square Volume:", square.volume()); // Square Volume method must be implemented


// This design allows Square to implement only the area method, while Cube implements both area and volume methods.

// This adheres to the Interface Segregation Principle by ensuring that classes only implement methods they actually use, avoiding unnecessary complexity and dependencies.

// In this example, the Shape interface is segregated into two classes: Square and Cube.
// Square only implements the area method, while Cube implements both area and volume methods. This way, clients of these classes are not forced to implement methods they don't need, adhering to the Interface Segregation Principle.
// This design allows for better flexibility and maintainability, as new shapes can be added without affecting existing code.
// This is a simple example of the Interface Segregation Principle (ISP) in action.

// The Interface Segregation Principle (ISP) states that no client should be forced to depend on methods it does not use.
// This principle encourages the creation of smaller, more specific interfaces rather than a large, general-purpose interface.
// In the example above, we have a Shape interface with methods for area and volume.
// The Square class only needs the area method, while the Cube class needs both area and volume methods.

class TwoDShape {
    area() {
        console.log("Area method must be implemented");
    }
}

class ThreeDShape {
    area() {
        console.log("Area method must be implemented");
    }
    volume() {
        console.log("Volume method must be implemented");
    }
}

class Circle extends TwoDShape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius; // Area of a circle
    }
}

class Sphere extends ThreeDShape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return 4 * Math.PI * this.radius * this.radius; // Surface area of a sphere
    }

    volume() {
        return (4 / 3) * Math.PI * this.radius * this.radius * this.radius; // Volume of a sphere
    }
}

// Example usage
let circle = new Circle(5);
let sphere = new Sphere(5);
console.log("Circle Area:", circle.area()); // Circle Area: 78.53981633974483
console.log("Sphere Area:", sphere.area()); // Sphere Area: 314.1592653589793
console.log("Sphere Volume:", sphere.volume()); // Sphere Volume: 523.5987755982989
console.log("Circle Volume:", circle.volume()); // Circle Volume method must be implemented
// console.log("Circle Volume:", circle.volume()); // Circle Volume method must be implemented
// This design allows Circle to implement only the area method, while Sphere implements both area and volume methods.
// This adheres to the Interface Segregation Principle by ensuring that classes only implement methods they actually use, avoiding unnecessary complexity and dependencies.
// In this example, the TwoDShape and ThreeDShape interfaces are segregated.