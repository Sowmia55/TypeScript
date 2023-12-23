const number = [1, 2, 3, -1];

const allPositive = numbers.every(value => { return value >= 0 });

console.log(allPositive);

const somePositive = numbers.some(value => { return value >= 0 });

console.log(somePositive);