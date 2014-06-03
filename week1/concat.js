'use strict';


var concat = function (str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        throw {
            name: 'TypeError',
            message: 'concat requires strings as arguments!'
        };
    }
    return str1 + str2;
};

exports.concat = concat;
