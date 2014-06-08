'use strict';


var fibonacci = require('./fibonacci').fibonacci;

exports.testNthFibonacci0 = function (test) {
    test.equal(0, fibonacci(0));
    test.done();
};

exports.testNthFibonacci2 = function (test) {
    test.equal(1, fibonacci(2));
    test.done();
};

exports.testNthFibonacci51 = function (test) {
    test.equal(12586269025, fibonacci(51));
    test.done();
};
