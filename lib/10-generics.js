"use strict";
/** A FIFO (First In First Out) collection */
class Queue1 {
    constructor() {
        this.data = [1];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
const queue1 = new Queue1();
queue1.push(123);
queue1.push(456);
console.log(queue1.pop().toPrecision(1));
console.log(queue1.pop().toPrecision(1));
