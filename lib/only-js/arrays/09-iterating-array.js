const numbers = [1, 2, 3];

//Solution 1
for (let number of numbers) {
    console.log(number);
}

//Solution 2
numbers.forEach(function (number) {
    console.log(number);
})

//Solution 2  replaced with arrow function
numbers.forEach(number => {
    console.log(number);
})

//Solution 2  replaced with arrow function and adding index
numbers.forEach((number, index) => {
    console.log(number, index);
})