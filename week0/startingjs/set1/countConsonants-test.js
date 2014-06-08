'use strict';


var countConsonants = require('./countConsonants').countConsonants;

exports.testCountConsonantsSentence = function (test) {
    test.equals(9, countConsonants('this is a sentence'));
    test.done();
};

exports.testCountConsonantsVolcano = function (test) {
    test.equals(11, countConsonants('Theistareykjarbunga'));
    test.done();
};

exports.testCountConsonantsUppercase = function (test) {
    test.equals(11, countConsonants('i LiKe To WrItE lIkE tHaT'));
    test.done();
};
