showNumber(10);

function Number(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 10 === 0) ? 'EVEN' : "ODD";
        console.log(i, message);
    }
}