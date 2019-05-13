const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;
const passport = require('passport')
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

////////// SESSIONS BEGIN //////////////
//use express-sessions for tracking s
//store: save sessions to mongo, not RAM
//needs to be after mongoose.connect because db not yet
app.use(session({
  secret: 'beware of little expenses',
  resave: true,
  saveUninitialized: false
  // store: new MongoStore({
  //   mongooseConnection: db
  // })
}));

//see the express session in console from MERN
app.use( (req, res, next) => {
  console.log('req.session', req.session);
  return next();
});

// Passport
app.use(passport.initialize())
app.use(passport.session()) 
// above calls serializeUser and deserializeUser
// serializeUser stores the user id to req.session.passport.user = {id:’..’}
//deserializeUser will check to see if this user is saved in the database and
//assigns it to req as req.user = {user object}.





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
