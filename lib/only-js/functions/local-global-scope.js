const colour = 'Red'; // global scope variable

function start() {
    const colour = 'Blue'; // local scope to only inside function
    const message = "hi";
    console.log(colour);  // blue ill be printed, local will take precedence when inside function
}

function stop() {
    const message = "bye"
}

start();
