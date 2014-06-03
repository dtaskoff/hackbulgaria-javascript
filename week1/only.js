'use strict';


var only = function (type, arr) {
    return arr.every(function (x) {
        return typeof x === type;
    });
};

exports.only = only;
