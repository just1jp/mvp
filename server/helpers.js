var Chance = require('chance');
var chance = new Chance();

exports.createCode = function() {
  return chance.hash({length: 6});
}