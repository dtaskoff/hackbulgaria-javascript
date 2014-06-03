'use strict';


var without = function (excluded, arr) {
    var remove = function (arr, elem) {
        var i = arr.indexOf(elem);
        if (i >= 0) {
            arr.splice(i, 1);
        }
    };
    excluded.forEach(function (x) {
        remove(arr, x);
    });
    return arr;
};

exports.without = without;
