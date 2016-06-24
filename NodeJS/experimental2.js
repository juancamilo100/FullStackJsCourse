//
// const http = require('http');
// //
// var text = 'Hello World';
// var request = http.get('http://responsivevoice.org/responsivevoice/getvoice.php?t=' + encodeURIComponent(text) + '&tl=en-US', function(response) {
//   // console.dir(response.statusCode);
//   var body = "";
//
//   response.on("data", function(dataChunk) {
//       body += dataChunk;
//     });
//
//   response.on("end", function() {
//     // console.log(body);
//
//     if(response.statusCode === 200) {
//       try {
//         // var parsedData = JSON.parse(body);
//         console.log(String(body));
//         // fs.createWriteStream('tts.mp3')
//       } catch(error) {
//         console.log(error);
//       }
//     }
//     else {
//       console.log(http.STATUS_CODES[response.statusCode]);
//     }
//   });
// });

var testMessages = [
  'What time is it?',
  'Heat up my water',
  'Set my oven to 25 degrees',
  'Turn the dispenser light off',
  'Start my cleaning cycle'
]

var fs = require('fs');
var request = require('request');
var text = 'This is my conquer, can I have a glass, of water?';

for(var i = 0; i < testMessages.length; i++) {
  // console.log(i);
var options = {
    url: 'http://responsivevoice.org/responsivevoice/getvoice.php?t=' + encodeURIComponent(testMessages[i]) + '&tl=en-US',
}

request(options)
    .pipe(fs.createWriteStream('tts' + i + '.mp3'))
}
