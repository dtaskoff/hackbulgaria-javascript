'use strict';


var always = require('./always').always;

exports.testAlways = function (test) {
    test.equals(5, (always(5))());
    test.done();
};
