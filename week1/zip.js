'use strict';


var range = function (from, to) {
    var arr = [];
    while (from <= to) {
        arr.push(from);
        from += 1;
    }
    return arr;
};

var zip = function () {
    var args = arguments,
        l = args.length,
        n = args[0].length;
    return range(0, n - 1).map(function (elemIndex) {
        return range(0, l - 1).map(function (arrIndex) {
            return args[arrIndex][elemIndex];
        });
    });
};

exports.zip = zip;
