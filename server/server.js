/************************************************************/
// Helpers
/************************************************************/

var express = require('express');
var partials = require('express-partials');
var mysql = require('mysql');
var Sequelize = require('sequelize');
var parser = require('body-parser');

/************************************************************/
// Server Setup
/************************************************************/

var app = express();

app.listen(8000, function() {
  console.log('Listening on 8000');
});

/************************************************************/
// Middleware
/************************************************************/

app.use(partials());
// Parse JSON (uniform resource locators)
app.use(parser.json());
// Parse forms (signup/login)
app.use(parser.urlencoded({ extended: true }));
// Serve client files
app.use(express.static(__dirname + '/../public'));

/************************************************************/
// Routing
/************************************************************/























