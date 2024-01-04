// Define a Cylinder class
class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    // Method to calculate the volume of the cylinder
    calculateVolume() {
        const pi = Math.PI;
        return (pi * this.radius ** 2 * this.height).toFixed(4);
    }
}

// Example usage
let myCylinder = new Cylinder(3, 5);
let volume = myCylinder.calculateVolume();
console.log(`Volume of the cylinder: ${volume}`);
// Output: Volume of the cylinder: 141.3717
