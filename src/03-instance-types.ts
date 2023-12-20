//built-in classes

let regexp: RegExp = new RegExp('a+b');

let array: Array<number> = [1, 2, 3];

let set: Set<number> = new Set([1, 2, 3]); //to holde unique values, internally removes duplicate elements

//user defined classes

/**A first in first out collection*/
class Queue<T> {
    private data: Array<T> = [];
    push(item: T) { this.data.push(item); }
    pop(): T | undefined { return this.data.shift(); }
}

let queue: Queue<number> = new Queue();

