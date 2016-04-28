// Declare a const port
const PORT = 2000;

// Declare express app
var express = require('express');
var app = express();

// Serve static public file
app.use(express.static(__dirname + '/client'));

// Set listening port
app.listen(PORT, function() {
	console.log("Listening on: " + PORT);
});