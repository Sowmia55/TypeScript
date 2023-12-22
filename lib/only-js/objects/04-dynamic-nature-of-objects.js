const circle = {
    radius: 1
};

circle.color = 'Red'; //its dynamic as can add or remove properties as wish
circle.draw = function () { }

delete circle.color; //removing property here

console.log(circle)
