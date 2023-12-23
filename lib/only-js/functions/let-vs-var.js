

// when we define with var, its scope is not limited within the loop/function
// let , const -  block scoped variables
// var - function scoped

function start() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i); //will throw error, since i is initialized with let key word
}

function start() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
    //will not throw error, since i is initialized with var key word and its accessible within the block
}
