'use strict';


var any = require('./any').any;

exports.testAnyTrue = function (test) {
    test.equals(true,
        any(function (x) { return x % 2 === 0; }, [1, 4, 7]));
    test.done();
};

exports.testAnyFalse = function (test) {
    test.equals(false,
        any(function (x) { return x % 2 === 0; }, [1, 5, 7]));
    test.done();
};
