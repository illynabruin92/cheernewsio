
// dependencies
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cheerio = require('cheerio');
var request = require('request'); 


//use body-parser with app
app.use(bodyParser.urlencoded({
  extended: false
}));

// make public a static dir
app.use(express.static('public'));

// Database configuration with mongoose
mongoose.connect('mongodb://heroku_ndk7h3d0:qkeo5t1qpmkbqs3guk1l6a9eo5@ds057476.mlab.com:57476/heroku_ndk7h3d0');
var db = mongoose.connection;

// show any mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

// once logged in to the db through mongoose, log a success message
db.once('open', function() {
  console.log('Mongoose connection successful.');
});
