'use strict';


var find = function (predicate, arr) {
    var l = arr.length;

    for (var i = 0; i < l; i += 1) {
        if (predicate(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
};

exports.find = find;
