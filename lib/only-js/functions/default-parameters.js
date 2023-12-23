
function interest(principal, rate, years) {
    rate = rate || 3.5;
    years = years || 5;
    return principal * rate / 100 * years;
}

console.log(1000);
console.log(1000, 3, 5);

/// can be added default value in parameter

function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

console.log(1000);
console.log(1000, 3, 5);
