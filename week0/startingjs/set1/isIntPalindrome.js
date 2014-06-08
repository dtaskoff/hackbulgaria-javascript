'use strict';


var isIntPalindrome = function (number) {
    return number
        .toString()
        .split('')
        // checks if every item is equal to it's symmetric element in the array
        .every(function (value, index, arr) {
            return value === arr[arr.length - index - 1];
        });
};

exports.isIntPalindrome = isIntPalindrome;
