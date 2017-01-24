/************************************************************/
// Database
/************************************************************/

var Sequelize = require('sequelize');
var sequelize = new Sequelize('referpop', 'root', '');

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

var User = sequelize.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  referralCode: {type: Sequelize.STRING},
  referrals: {type: Sequelize.INTEGER}
})

User.sync().then(function() {
  console.log('table created');
})

exports.User = User;