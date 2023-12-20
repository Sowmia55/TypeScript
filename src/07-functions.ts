//if return type is know = number

function add(a: number, b: number): number {
    return a + b;
}

//if return type is unknown = void

function add1(a: number, b: number): void {
    console.log("LOG:", message);
}

//function that can take indefnite number of arguments
// indicated by 3 dots ... and such parameter is called "rest parameter"

function sum(...values: any[]) {
    return values.reduce((previous, current) => {
        return previous + current;

    });
}

//Java script support first class functions
type Add = (a: number, b: number) => number; //type aliases

let add2: Add; //shorthand way of declaring

add2 = function (a: number, b: number) {
    return a + b;
}

add2 = (a, b) => a + b;