"use strict";

var sum_of_digits = function(number) {
  var sum = 0;
  number = Math.abs(number);
  while (number > 0) {
    sum += parseInt(number % 10, 10);
    number = parseInt(number / 10, 10);
  }
  return sum;
};

exports.sum_of_digits = sum_of_digits;
