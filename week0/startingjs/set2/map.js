'use strict';


var map = function (f, arr) {
    var result = [];
    arr.forEach(function (a) {
        result.push(f(a));
    });
    return result;
};

exports.map = map;
