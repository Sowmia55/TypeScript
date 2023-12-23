const courses = [
    { id: 1, nameee: 'a' },
    { id: 1, nameee: 'a' }
];

const course = courses.find(course => course.name === 'a'); // if only one statement and has value


// if method name is empty and has 2 statements add braces
const course2 = courses.find(() => {
    course.name === 'a'
    course.name === 'b'
}
); 