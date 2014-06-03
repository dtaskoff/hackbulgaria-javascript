'use strict';


var find = require('./find').find;

exports.testFind = function (test) {
    test.equals(3, find(function (x) { return x % 3 === 0; },
        [1, 2, 3, 6, 9]));
    test.done();
};

exports.testFindUndefined = function (test) {
    test.equals(undefined, find(function (x) { return x % 3 === 0; },
        [1, 2, 4, 5]));
    test.done();
};
