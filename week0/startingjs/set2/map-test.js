'use strict';


var map = require('./map').map;


exports.testMap = function (test) {
    test.equals([2, 4, 6].toString(),
            map(function (x) { return x * 2; }, [1, 2, 3]).toString());
    test.done();
};
