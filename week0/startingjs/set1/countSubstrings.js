'use strict';


var countSubstrings = function (haystack, needle) {
    return haystack.split(needle).length - 1;
};

exports.countSubstrings = countSubstrings;
