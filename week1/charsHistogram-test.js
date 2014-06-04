'use strict';


var charsHistogram = require('./charsHistogram').charsHistogram;

exports.testCharsHistogram = function (test) {
    test.deepEqual({ b: 1, e: 2, h: 1, i: 1, j: 1, s: 3, t: 2},
        charsHistogram("js is the best"));
    test.done();
};
