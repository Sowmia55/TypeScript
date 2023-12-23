const numbers = [1, -1, 2, 3];
const filtered = numbers.filter(n => n >= 0);
const items = filtered.map(n => '<li>' + n + '</li>'); //mapping an array to different form
const items1 = filtered.map(n => {
    const obj = { value: n };
    return obj;
});
const html = '<ul>' + items.join('') + '</ul>'
console.log(html);

//combining map and filter

const items3 = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items3);
