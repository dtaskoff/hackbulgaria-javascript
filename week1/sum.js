 'use strict';


 var sum = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'sum requires numbers as arguments!'
        };
    }
    return a + b;
 };

exports.sum = sum;
