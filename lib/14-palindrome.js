"use strict";
function isPalindrome(str) {
    return str === str.split('').reverse().join();
}
console.log(isPalindrome('madam'));
console.log(isPalindrome('madan'));
