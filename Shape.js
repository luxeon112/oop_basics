class Shape{
    // constructor
    constructor(name, sides, sideLength) {
        // atributes - fields
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    // method
    calcPerimeter() {
        this.perimeter = this.sides * this.sideLength
        console.log('Perimeter: ' + this.perimeter)
    }
}