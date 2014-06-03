'use strict';


var sum = require('./sum').sum;

exports.testSum2and3 = function (test) {
    test.equals(5, sum(2, 3));
    test.done();
};

exports.testSumInvalid = function (test) {
    test.throws(function () {
        sum(2, 'a');
    });
    test.done();
};
