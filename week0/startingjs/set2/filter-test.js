'use strict';


var filter = require('./filter').filter;

exports.testFilter = function (test) {
    test.equals([2].toString(),
        filter(function (x) { return x % 2 === 0; }, [1, 2, 3]).toString());
    test.done();
};
