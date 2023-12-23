const number = [1, 2, -1, 3];

const sum = number.reduce((accumulator, currentValue) => { return accumulator + currentValue }, 0);
// 0 at the end is initial value for accumulator like - let sum = 0;

console.log(sum);