"use strict";
let letter;
letter = '12345';
//to use as number
const number = letter; //(type assertion << does not work here)
const number1 = +letter;
//now if u hover over number1,  type will be number , this will work tby adding "+", called type coercision
// in runtime number1 is turned as number
console.log(number1 === 1337);
