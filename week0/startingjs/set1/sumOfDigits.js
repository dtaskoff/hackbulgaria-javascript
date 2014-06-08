'use strict';


var sumOfDigits = function (number) {
    var sum = 0;
    // counts only digits before the floating point
    number = Math.floor(Math.abs(number));

    while (number > 0) {
        sum += parseInt(number % 10, 10);
        number = parseInt(number / 10, 10);
    }
    return sum;
};

exports.sumOfDigits = sumOfDigits;
