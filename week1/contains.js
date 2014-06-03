'use strict';


var contains = function (element, array) {
    if (!Array.isArray(array)) {
        throw {
            name: 'TypeError',
            message: 'contains requires an array!'
        };
    }
    return array.indexOf(element) >= 0;
};

exports.contains = contains;
