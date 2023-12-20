//Classes

/**
 * here we have class animal with the propery name
 * a cunstructor function that is used to create instances of this class
 * and a method called move that takes disctance and meters that logs something
 */


class Animal {
    protected namee: string; //can be access withing the class

    constructor(namee: string) {
        this.namee = namee;
    }

    moveBy(distanceInMeters: number) {
        console.log(`${this.namee} moved ${distanceInMeters}m`)
    }
}

let cat = new Animal('cat');
cat.moveBy(10);
// cat.name = 'DOG'; << throws error if its private/protected variable
//inheritance

class Bird extends Animal {
    fly(distanceInMeters: number) {
        console.log(`${this.namee} moved ${distanceInMeters}m`) //name is accessile here since if used protected can be used in class hierarchy
    }
}



