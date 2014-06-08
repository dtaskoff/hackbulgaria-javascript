'use strict';


var fibonacci = function (n) {
    // 1st fibonacci number is 0
    // 2nd fibonacci number is 1, etc...
    var memo = [0, 0, 1],
        fib = function (m) {
            if (memo[m] === undefined) {
                memo[m] = fib(m - 1) + fib(m - 2);
            }
            return memo[m];
        };
    return fib(n);
};

exports.fibonacci = fibonacci;
