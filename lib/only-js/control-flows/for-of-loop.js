//only for arrays and maps
const colour = ['red', 'blue', 'green']
for (let index of colour)
    console.log(index); // red, blue, green



//to use for of for objects
const circle = {
    redius: 1,
    draw() {
        console.log("draw")
    }
}
for (let key of Object.keys(circle))
    console.log(key);

for (let entry of Object.entries(circle))
    console.log(entry);