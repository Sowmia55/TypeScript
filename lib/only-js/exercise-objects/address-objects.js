
let address = {
    street: 'a',
    city: "a",
    zipcode: 123
}

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}

showAddress(address);