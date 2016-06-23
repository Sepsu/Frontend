var fs = require('fs');
console.log("fs ok");
var babelrc = fs.readFileSync('./.babelrc');
var config;
console.log("babelrc ok");
try {
  config = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}
console.log("parse ok");
require('babel-core/register')(config);
console.log("babel register ok");
require('../server');
console.log("server run");