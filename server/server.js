/************************************************************/
// Helpers
/************************************************************/

var express = require('express');
var partials = require('express-partials');
var mysql = require('mysql');
var Sequelize = require('sequelize');
var parser = require('body-parser');

var db = require('../db/schema');
var helpers = require('./helpers');

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

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: __dirname + '/../public'});
})

app.post('/login', function(req, res) {
  db.User.find({where: {email: req.body.email}})
  .then(function(user) {
    if (user) {
      console.log('user exists! ' + user.email);
      res.json(user);
    } else {
      db.User.build({
        email: req.body.email,
        referralCode: helpers.createCode(),
        referrals: 0
      })
      .save()
      .then(function(user) {
        res.json(user);
      })
    }
  })
  .catch(function(error) {
    res.json(error.original.errno);
  })

});

app.post('/referral', function(req, res) {
  db.User.find({where: {referralCode: req.body.referrer}})
  .then(function(user) {
    if (user) {
      user.updateAttributes({
        referrals: user.referrals + 1
      })
    }
  })
  console.log('referred by ', req.body.referrer);
  res.json('referred success');
})



















