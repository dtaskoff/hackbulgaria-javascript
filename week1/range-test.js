'use strict';


var range = require('./range').range;

exports.testRange = function (test) {
    test.deepEqual([1, 2, 3, 4, 5], range(1, 5));
    test.done();
};

exports.testRangeEmpty = function (test) {
    test.deepEqual([], range(2, 1));
    test.done();
};
