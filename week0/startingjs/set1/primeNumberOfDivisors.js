'use strict';


var range = function (from, to) {
    var arr = [];
    while (from <= to) {
        arr.push(from);
        from += 1;
    }
    return arr;
};

var getAllDivisorsOf = function (number) {
    return range(1, number).filter(function (x) {
        return Math.floor(number % x, 10) === 0;
    });
};

var isPrime = function (number) {
    // for is the best in this case
    for (var i = 2; i <= Math.sqrt(number); i += 1) {
        if (Math.floor(number % i) === 0) {
            return false;
        }
    }
    return number >= 2;
};

var primeNumberOfDivisors = function (number) {
    return isPrime(getAllDivisorsOf(number).length);
};

exports.primeNumberOfDivisors = primeNumberOfDivisors;
