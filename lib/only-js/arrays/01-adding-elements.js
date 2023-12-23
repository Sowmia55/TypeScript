const number = [3, 4];

//add elements at the end
numbers.push(5, 6);

//add elements at the begining
numbers.unshift(1, 2);

//add elements at the middle
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);
