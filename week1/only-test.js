'use strict';


var only = require('./only').only;

exports.testOnlyTrue = function (test) {
    test.equals(true, only('number', [1, 2, 3]));
    test.done();
};

exports.testOnlyFalse = function (test) {
    test.equals(false, only('number', [1, 2, 'not a number']));
    test.done();
};
