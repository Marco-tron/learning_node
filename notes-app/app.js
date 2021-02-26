const validator = require("validator");
const notes = require("./notes.js");

console.log(notes.getNotes())

// using the third party module to verify if a string is an email
console.log(validator.isEmail("email@email.com"))
