
//when you require another file you load it in its entirety, so when you execute app.js the console printed in the file will execute too
const utils = require("./utils.js")
const notes = require("./notes.js")

const myName = "Marco";

console.log(myName)

//this variable is exported, so it can be read here
console.log(utils.myName);

//this variable is NOT exported, so it CANNOT be read here
//console.log(utils.herName);



console.log(notes.getNotes())
