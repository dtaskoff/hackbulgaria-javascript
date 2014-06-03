'use strict';


var without = require('./without').without;

exports.testWithout = function (test) {
    test.deepEqual([2, 4], without([0, 1, 3], [1, 2, 3, 4]));
    test.done();
};
