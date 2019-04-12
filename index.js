/* jshint esversion: 6 */

const _ = require('lodash');

const numbers = [33, 44, 55, 77, 88, 99, 105, 110];

_.each(numbers, (number, i) => {
  console.log(number);
});
