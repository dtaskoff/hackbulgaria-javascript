'use strict';


var filter = function (predicate, arr) {
    var result = [];
    arr.forEach(function (x) {
        if (predicate(x)) {
            result.push(x);
        }
    });
    return result;
};

exports.filter = filter;
