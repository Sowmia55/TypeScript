function sum(a, b) {
    console.log(arguments); //1,2,3,4,5

    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(1, 2, 3, 4, 5);