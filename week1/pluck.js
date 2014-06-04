'use strict';


var pluck = function (property, arr) {
    return arr.map(function (obj) {
        return obj[property];
    });
};

exports.pluck = pluck;
