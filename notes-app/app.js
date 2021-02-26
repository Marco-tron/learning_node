// fs is a core node module that helps wth creating and reading files

// require imports the module you wrote on the string and puts it in the variable you want using this fs now contains all filesystem functions
fs = require("fs");

//writeFileSync is an fs function and now that fs is required it will work properly
fs.writeFileSync("notes.txt", "This file was created using the file system module for node.js");




// Challenge - Append a message to notes.txt


// append file is another function of the fs module, if you ever wonder if you can do something new check the documentation and see if there is already a solution for your problem
fs.appendFileSync('notes.txt', 'appended data to notes.txt');