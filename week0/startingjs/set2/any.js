'use strict';


var any = function(pred, arr) {
    var result = false;
    arr.forEach(function (x) {
        result = result || pred(x);
    });
    return result;
};

exports.any = any;
