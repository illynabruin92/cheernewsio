
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