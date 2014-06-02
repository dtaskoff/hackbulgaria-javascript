'use strict';

var reduce = function (func, arr, start) {
    var result = start;
    arr.forEach(function (x) {
        result = func(result, x);
    });
    return result;
};

exports.reduce = reduce;
