
function sum(arg) {
    console.log(arg);
}
console.log(sum(1, 2, 3, 4)); //1


//with spread operatoror called as rest operator
function sum(...arg) {
    console.log(arg);
}
console.log(sum(1, 2, 3, 4)); //1,2,3,4