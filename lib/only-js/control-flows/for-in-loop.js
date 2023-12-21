// to iterate over properties of objects or elements in an array - for..in and for ..of loops

const { bundlerModuleNameResolver } = require("typescript");

//using object
const person = {
    name: 'Mosh',
    age: 30
};

for (let key in person)
    console.log(key); //name , age
console.log(key, person[key]);

//using array

const colour = ['red', 'blue', 'green']
for (let index in colour)
    console.log(index, colour[index]);