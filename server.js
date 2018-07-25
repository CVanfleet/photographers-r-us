// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

var exec = require('child_process').exec, child;

function thimbleImport(thimbleURL) {
  // Remove existing files
  // Fetch archive
  // Extract
  // Restart as Thimble App
  child = exec('./import.sh',
  function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
           console.log('exec error: ' + error);
      }
  });
}

// Check if we're a remix
if('ea4b9a75-92ac-4057-9a6e-31dde0d03682' !== process.env.PROJECT_ID) {
  console.log('remix!')
  thimbleImport()
} else {
  console.log('Base!')
  thimbleImport()
}
