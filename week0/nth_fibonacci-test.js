"use strict";


var nth_fibonacci = require("./nth_fibonacci").nth_fibonacci;

exports.testNthFibonacci0 = function(test) {
  test.equal(0, nth_fibonacci(0));
  test.done();
};

exports.testNthFibonacci2 = function(test) {
  test.equal(1, nth_fibonacci(2));
  test.done();
};

exports.testNthFibonacci50 = function(test) {
  test.equal(12586269025,
    nth_fibonacci(50));
  test.done();
};

exports.testNthFibonacciNegative = function(test) {
  test.equal(0, nth_fibonacci(-2));
  test.done();
};
