/*finding elemets in ARRAY */
const numbers = [1, 2, 3, 4, 1];
console.log(numbers.indexOf("a")); // will return -1, since we dont have 'a" in array numbers
console.log(numbers.indexOf(1)); //0
console.log(numbers.indexOf("1")); // -1, since we dont have '"string-1" in array numbers
console.log(numbers.lastIndexOf(1)); //4

// to find if the Element is not present in array
console.log(numbers.indexOf(1) !== -1);
// to find if the Element is present in array
console.log(numbers.includes(1));


