'use strict';


var all = require('./all').all;

exports.testAllTrue = function (test) {
    test.equals(true,
        all(function (x) { return x % 2 === 0; }, [2, 4, 6]));
    test.done();
};

exports.testAllFalse = function (test) {
    test.equals(false,
        all(function (x) { return x % 2 === 0; }, [1, 4, 6]));
    test.done();
};
