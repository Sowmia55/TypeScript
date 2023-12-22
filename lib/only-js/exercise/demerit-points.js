//Speed limit = 70
//5 -> 1
//12 points -> suspended

checkSpeed(20);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit) {
        console.log("OK");
        return;
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points > 12) {
        console.log("License Suspended");
    }
    else {
        console.log(points, "License Suspended");
    }

}