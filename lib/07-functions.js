"use strict";
//if return type is know = number
function add(a, b) {
    return a + b;
}
//if return type is unknown = void
function add1(a, b) {
    console.log("LOG:", message);
}
//function that can take indefnite number of arguments
// indicated by 3 dots ... and such parameter is called "rest parameter"
function sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
let add2; //shorthand way of declaring
add2 = function (a, b) {
    return a + b;
};
add2 = (a, b) => a + b;
