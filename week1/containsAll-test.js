'use strict';


var containsAll = require('./containsAll').containsAll;

exports.testContainsAllTrue = function (test) {
    test.equals(true, containsAll([2, 3], [1, 2, 3]));
    test.done();
};

exports.testContainsAllFalse = function (test) {
    test.equals(false, containsAll([1, 0], [1, 2, 3]));
    test.done();
};

exports.testContainsInvalid = function (test) {
    test.throws(function () {
        containsAll(1, [1, 2, 3]);
    });
    test.done();
};

exports.testContainsCheckException = function (test) {
    try {
        containsAll(1, [1, 2, 3]);
    } catch (e) {
        test.equals('TypeError', e.name);
        test.equals('containsAll requires arrays as arguments!', e.message);
    }
    test.done();
};
