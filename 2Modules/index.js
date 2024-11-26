// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// Now that we've learned about "module wrapper" that's why we know
// that every file is a module (by default).

//By this statement we can use the same geet function here,require: A function to import other modules.
const greet = require('./greet');

const {person1, person2}= require('./names')

greet('Shyam');
console.log(person1,person2)