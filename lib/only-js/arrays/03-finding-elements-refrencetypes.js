/* finding elements of OBJECTS ARRAY */
const courses = [
    { id: 1, nameee: 'a' },
    { id: 1, nameee: 'a' }
];

const course = courses.find(function (course) {
    return course.name === 'a';
});

const courseIndex = courses.findIndex(function (course) {
    return course.name === 'a';
});

console.log(course);
console.log(courseIndex);