//Constructor Function
//use PascalCase

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(1);

/*
when used a new keyword
1. new operator creates an empty javascript object like const x = {}
2.this in line 5 will point to xonst x = {}
*/