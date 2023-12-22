let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

function Address(street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;
}

function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.state === address2.state;
}
function areSame(address1, address2) {
    return address1 === address2
}
