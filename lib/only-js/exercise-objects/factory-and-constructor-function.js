//Factory Function

let address = createAddress('a', 'b', 'c');
console.log(address);

function createAddress(street, city, state) {
    return {
        street,
        city,
        state
    };
}

//Constructor Function
function Address(street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;
}