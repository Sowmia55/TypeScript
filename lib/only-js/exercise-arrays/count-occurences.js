const numbers = [1, 2, 3, 4, 5];
const count = countOccurences(numbers, -1);
console.log(count);

function countOccurences(array, searchElement) {
    let count = 0;
    for (let element of array) {
        if (element === searchElement) {
            count++;
        }
        return count;
    }

}