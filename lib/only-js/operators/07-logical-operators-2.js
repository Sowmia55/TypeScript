/* Falsy (false) */
// undefined
// null
// 0
// false
// ''
// NaN

const { collapseTextChangeRangesAcrossMultipleVersions } = require("typescript");

//Anything that is not falsy is - Truthy

false || true //true -since truthy
false || 1 //1 - since truthy
false || "name" // name - since truthy

//short circuting

false || 1 || 2 //1

//example-1

let userColour = 'Red';
let defaultColour = 'Blue';
let colour = userColour || defaultColour;

console.log(colour) //Red

//example-1
let userColour1 = undefined;
let defaultColour1 = 'Blue';
let colour1 = userColour1 || defaultColour1;

console.log(colour1) //Blue, since user colour is undefined
