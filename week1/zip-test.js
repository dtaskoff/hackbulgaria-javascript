'use strict';


var zip = require('./zip').zip;

exports.testZip = function (test) {
    test.deepEqual([[1, 4], [2, 5], [3, 6]], zip([1, 2, 3], [4, 5, 6]));
    test.done();
};

exports.testZip = function (test) {
    test.deepEqual([[1, 4], [2, 5], [3, undefined]], zip([1, 2, 3], [4, 5]));
    test.done();
};
