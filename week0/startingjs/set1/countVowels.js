'use strict';


var countVowels = function (str) {
    var patt = /^[aeiouy]$/i;
    return str.split('').filter(function (char) {
        return patt.test(char);
    }).length;
};

exports.countVowels = countVowels;
