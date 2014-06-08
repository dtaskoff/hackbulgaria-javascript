'use strict';


var countVowels = require('./countVowels').countVowels;

exports.testCountVowelsSentence = function (test) {
    test.equals(6, countVowels('this is a sentence'));
    test.done();
};

exports.testCountVowelsVolcano = function (test) {
    test.equals(8, countVowels('Theistareykjarbunga'));
    test.done();
};

exports.testCountVowelsUppercase = function (test) {
    test.equals(9, countVowels('i LiKe To WrItE lIkE tHaT'));
    test.done();
};
