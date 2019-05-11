const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;
var logger = require("morgan");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

//Serveup local static assets
app.use(express.static('public'));


// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fixapp");

// local mongodb connection
mongoose.connect("mongodb://localhost/fixapp",  { useNewUrlParser: true });
const db = mongoose.connection;
// mongo error
db.on('error', console.error.bind(console, 'connection error:'));

// Use morgan logger for logging requests
app.use(logger("dev"));

// parse incoming requests: if problem look at app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add routes, both API and view
app.use(routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.log('error here');
  res.status(500).json({
    message: err.message,
    error: err
  });
});




// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
