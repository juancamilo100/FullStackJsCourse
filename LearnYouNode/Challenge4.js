var fs = require("fs");
var buffer = require("buffer");

fs.readFile(process.argv[2], function(error, fileContents){
      if(error) throw error;
      buffer = fileContents;
      var split = buffer.toString().split('\n');
      console.log(split.length - 1);
    })
