'use strict';


var contains = require('./contains').contains;

var containsAll = function (elements, array) {
    if (!Array.isArray(elements) || !Array.isArray(array)) {
        throw {
            name: 'TypeError',
            message: 'containsAll requires arrays as arguments!'
        };
    }
    return elements.every(function (element) {
        return contains(element, array);
    });
};

exports.containsAll = containsAll;
