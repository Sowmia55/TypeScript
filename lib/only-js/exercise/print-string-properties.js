const movie = {
    title: 'a',
    releaseYear: 2019,
    director: "b",
    reting: 4.5
}

showProperties(movie);

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            console.log(key, obj[key]);
        }
    }
}