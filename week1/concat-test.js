'use strict';


var concat = require('./concat').concat;

exports.testConcatABCandBCA = function (test) {
    test.equals('ABCBCA', concat('ABC', 'BCA'));
    test.done();
};

exports.testConcatInvalid = function (test) {
    test.throws(function () {
        concat(2, 'abc');
    });
    test.done();
};
