'use strict';


var isPrime = function (number) {
    // for is the best in this case
    for (var i = 2; i <= Math.sqrt(number); i += 1) {
        if (Math.floor(number % i) === 0) {
            return false;
        }
    }
    return number >= 2;
};

exports.isPrime = isPrime;
