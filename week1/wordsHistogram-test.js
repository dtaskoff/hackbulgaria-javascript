'use strict';


var wordsHistogram = require('./wordsHistogram').wordsHistogram;

exports.testWordsHistogram = function (test) {
    test.deepEqual({ a: 1, meaningless: 1, sentence: 1},
        wordsHistogram('a meaningless sentence'));
    test.done();
};

exports.testWordsHistogram2 = function (test) {
    test.deepEqual({ an: 2, and: 1, apple: 2 },
        wordsHistogram('an apple and an apple'));
    test.done();
};
