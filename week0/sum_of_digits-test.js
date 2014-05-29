"use strict";

var sum_of_digits = require("./sum_of_digits").sum_of_digits;

exports.testSumOfDigits123 = function(test) {
  test.equal(6, sum_of_digits(123));
  test.done();
};

exports.testSumOfDigits123Negative = function(test) {
  test.equal(6, sum_of_digits(-123));
  test.done();
};

exports.testSumOfDigits0 = function(test) {
  test.equal(0, sum_of_digits(0));
  test.done();
};
