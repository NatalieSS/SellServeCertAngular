var express = require('express');
var Path = require('path');
var routes = express.Router();
// require('./db');
// var db = require('./dbRequests.js');
// var api = require('./apiHandlers.js');

// var assetFolder = Path.resolve(__dirname, '/');
// routes.use(express.static(assetFolder));

// var express = require("express");
var app = express();

app.get("/", function(req, res) {
   res.sendFile(__dirname + '/index.html')
});

 app.post("/user/add", function(req, res) { 
/* some server side logic */
res.send("OK");
 });

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
    console.log('static file request : ' + req.params);
    res.sendFile( __dirname + req.params[0]); 
});

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


// /* route to index.html */
// var assetFolder = Path.resolve(__dirname, '/');
// routes.use(express.static(assetFolder));


// // The Catch-all Route
// // This is for supporting browser history pushstate.
// // NOTE: Make sure this route is always LAST.
// routes.get('/*', function(req, res){
//   res.sendfile('index.html')
// })

// //
// // Development or production mode;
// // create and run a real server.
// //
// var port = process.env.PORT || 8000;
// app.listen(port);
// console.log("Listening on port", port);