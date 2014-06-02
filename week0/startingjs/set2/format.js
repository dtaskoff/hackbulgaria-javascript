'use strict';


var format = function (string, placeholders) {
    var result = string;
    for (var placeholder in placeholders) {
        if (placeholders.hasOwnProperty(placeholder)) {
            result = result.replace('{' + placeholder + '}',
                                        placeholders[placeholder]);
        }
    }
    return result;
};

exports.format = format;
