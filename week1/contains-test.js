'use strict';


var contains = require('./contains').contains;

exports.testContainsTrue = function (test) {
    test.equals(true, contains(1, [1, 2, 3]));
    test.done();
};

exports.testContainsFalse = function (test) {
    test.equals(false, contains(0, [1, 2, 3]));
    test.done();
};

exports.testContainsInvalid = function (test) {
    test.throws(function () {
        contains(1, 1);
    });
    test.done();
};

exports.testContainsCheckException = function (test) {
    try {
        contains(1, 1);
    } catch (e) {
        test.equals('TypeError', e.name);
        test.equals('contains requires an array!' ,e.message);
    }
    test.done();
};
