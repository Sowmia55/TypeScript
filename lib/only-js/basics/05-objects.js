// let person = {} <<< Object literal

let person = {
    name: 'AAA',
    age: 22
}

console .log(person);
console .log(person.age);

// Reassigning value by dot notation
person.name = 'BBB';
// Reassigning value by bracket notation
person['age'] = 33;


console .log(person);

// Way 2 for bracket notation
let param = 'name';
person[param] = 'CCC';
console .log(person);
