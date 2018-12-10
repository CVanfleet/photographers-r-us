var express = require('express');
var app = express();

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/README.md');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

var exec = require('child_process').exec, child;

function thimbleImport(token, id, published) {
  // Remove existing files
  // Fetch archive
  // Extract
  // Restart as Thimble App
  child = exec('./import.sh', {
    env: {
      TOKEN: token,
      ID: id,
      PROJECTTYPE: published ? 'publishedprojects' : 'projects'
    }
  }, function (error, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    process.exit()
  });
}

// Check if we're a remix
if('ea4b9a75-92ac-4057-9a6e-31dde0d03682' !== process.env.PROJECT_ID) {
  if(process.env.TOKEN && process.env.ID) {
    console.log('Starting Thimble import')
    thimbleImport(process.env.TOKEN, process.env.ID, process.env.PUBLISHED)
  } else {
    console.error("Cannot import from Thimble, are you sure you passed TOKEN and ID variables to the remix?")
  }
}
