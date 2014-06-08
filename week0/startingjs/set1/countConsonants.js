'use strict';


var countConsonants = function (str) {
    var patt = /^[bcdfghjklmnpqrstvwxz]$/i;
    return str.split('').filter(function (char) {
        return patt.test(char);
    }).length;
};

exports.countConsonants = countConsonants;
