const array = [0, 1, 2, 3, null, undefined, '', false]
console.log(countTruthy(array));
/* 
Falsy
undefined,0,null,'',false,NaN
*/

function countTruthy(array) {
    let count = 0;
    for (let value of array) {
        if (value) count++;
        return count;
    }
}