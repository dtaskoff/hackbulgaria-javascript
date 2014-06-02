'use strict';


var all = function(pred, arr) {
    var result = true;
    arr.forEach(function (x) {
        result = result && pred(x);
    });
    return result;
};

exports.all = all;
