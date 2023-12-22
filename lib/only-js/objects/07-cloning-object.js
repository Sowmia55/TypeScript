const circle = {
    radius: 1,
    draw() {
        console.log('draw')
    }
};

//old way 
const another = {};
for (let key in circle) {
    another[key] = circle[key];
}
console.log(another);
//simple modern way
const another1 = Object.assign({}, circle);
console.log(another);
//simplest with spread operator
const another3 = { ...circle };
console.log(another);