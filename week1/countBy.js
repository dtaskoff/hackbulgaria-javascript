'use strict';


var groupBy = require('./groupBy').groupBy;

var countBy = function (func, arr) {
    var result = groupBy(func, arr);
    for (var obj in result) {
        if (result.hasOwnProperty(obj)) {
            result[obj] = result[obj].length;
        }
    }
    return result;
};

exports.countBy = countBy;
