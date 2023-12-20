/** A FIFO (First In First Out) collection */

class Queue1<T> {
    data: number[] = [1];
    push(item: number) { this.data.push(item); }
    pop(): T { return this.data.shift(); }
}

const queue1 = new Queue1<number>();
queue1.push(123);
queue1.push(456);

console.log(queue1.pop().toPrecision(1));
console.log(queue1.pop().toPrecision(1));