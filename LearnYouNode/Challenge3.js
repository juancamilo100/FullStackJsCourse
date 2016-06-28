var fs = require("fs");
var buffer = require("buffer");

buffer = fs.readFileSync(process.argv[2]); // read file from path provided by the first command-line argument
var split = buffer.toString().split('\n'); // Creates an array with 
console.log(split.length - 1);
