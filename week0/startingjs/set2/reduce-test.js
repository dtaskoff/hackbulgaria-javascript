'use strict';


var reduce = require('./reduce').reduce;


exports.testReduceSum = function (test) {
    test.equals(10,
        reduce(function (a, b) { return a + b; }, [1, 2, 3, 4], 0));
    test.done();
};

exports.testReduceProduct = function (test) {
    test.equals(24,
        reduce(function (a, b) { return a * b; }, [1, 2, 3, 4], 1));
    test.done();
};
