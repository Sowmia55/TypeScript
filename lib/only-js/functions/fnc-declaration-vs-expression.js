//Function Declaration
function walk() {
    console.log("Walk");
}

//Function Expression without name - anonymus
let run = function () {
    console.log("AAA");
};
let x = 1;

//Named Function Express
let running = function running() {
    console.log("AAA");
};

let move = run;
run();
move();
