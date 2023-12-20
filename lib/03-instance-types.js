"use strict";
//built-in classes
let regexp = new RegExp('a+b');
let array = [1, 2, 3];
let set = new Set([1, 2, 3]); //to holde unique values, internally removes duplicate elements
//user defined classes
/**A first in first out collection*/
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
let queue = new Queue();
