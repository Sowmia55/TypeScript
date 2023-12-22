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

for (let key in circle) {
    console.log(key, circle[key]);
}

if ('radius' in circle) console.log('YES')