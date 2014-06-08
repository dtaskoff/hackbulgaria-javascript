'use strict';


var isIncreasing = function (seq) {
    return seq.reduce(function (prev, curr) {
        if (prev !== false && prev < curr) {
            return curr;
        }
        return false;
    }) && true;
};

exports.isIncreasing = isIncreasing;
