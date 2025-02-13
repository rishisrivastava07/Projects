/**
 * index.js - it is a special file which requires all the data from current directory and helps it to export to some another directory.
 */
const apple = require("./apple");
const banana = require("./banana");
const orange = require("./orange");

let fruits = [apple, banana, orange];

module.exports = fruits;