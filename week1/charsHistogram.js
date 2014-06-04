'use strict';


var charsHistogram = function (text) {
    var result = {};
    var patt = /^[a-z]$/;
    text.toLowerCase().split('').forEach(function (char) {
        if (patt.exec(char)) {
            if (result[char]) {
                result[char] += 1;
            } else {
                result[char] = 1;
            }
        }
    });
    return result;
};

exports.charsHistogram = charsHistogram;
