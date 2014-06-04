'use strict';


var wordsHistogram = function (text) {
    var result = {};
    text.split(' ').forEach(function (word) {
        if (result.hasOwnProperty(word)) {
            result[word] += 1;
        } else {
            result[word] = 1;
        }
    });
    return result;
};

exports.wordsHistogram = wordsHistogram;
