'use strict';


var isDecreasing = function (seq) {
    return seq.reduceRight(function (prev, curr) {
        if (prev !== false && prev < curr) {
            return curr;
        }
        return false;
    }) && true;
};

exports.isDecreasing = isDecreasing;
