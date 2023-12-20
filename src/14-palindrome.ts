function isPalindrome(str: string): boolean {
    return str === str.split('').reverse().join();
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('madan'));