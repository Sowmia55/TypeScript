//Divisible by 3 = fizz
//Divisible by 5 = buzz
//Divisible by 3 & 5 = fizzbuzz
//Not divisible by 3 & 5 = retun same input
//if inuput is not number = "Not a number"

let output = fizzbuzz('3');
console.log(output);

function fizzbuzz(num) {
    if (typeof num !== 'number') {
        return "Not a number";
    }
    if (num % 5 === 0 && num % 3 === 0) {
        return "fizzbuzz";
    }
    if (num % 3 === 0) {
        return "Fizz";
    }
    if (num % 5 === 0) {
        return "Buzz";
    }
    return number;
}