'use strict';


var groupBy = function (func, array) {
    var result = {};
    array.forEach(function (x) {
        if (result[func(x)] === undefined) {
            result[func(x)] = [x];
        } else {
            result[func(x)].push(x);
        }
    });
    return result;
};

exports.groupBy = groupBy;
