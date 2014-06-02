'use strict';


var format = require('./format').format;

exports.testFormat = function (test) {
    console.log(typeof format);
    test.equals('JavaScript is a very weird language!',
        format('{lang} is a very weird {thing}!', {
            'lang' : 'JavaScript',
            'thing' : 'language'
        }));
    test.done();
};
