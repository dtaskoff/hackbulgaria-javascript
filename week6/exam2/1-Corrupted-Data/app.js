'use strict';


var data = require('./data.json');


var getRepeatableCheckins = function (checkins) {
    var occurrencesOfCheckin  = {},
        repeatableCheckins = [];

    checkins.forEach(function (checkin) {
        var hashedCheckin = hash(checkin);

        // only adding checkin to repeatableCheckins,
        // if it occurs for a second time,
        // else just increment it's occurrences
        if (occurrencesOfCheckin[hashedCheckin] === undefined) {
            occurrencesOfCheckin[hashedCheckin] = 0;
        } else if (occurrencesOfCheckin[hashedCheckin] === 1) {
            repeatableCheckins.push(checkin);
        }
        occurrencesOfCheckin[hashedCheckin] += 1;
    });

    return repeatableCheckins;
};

var hash = function (object) {
    return object.toString();
};

console.log(getRepeatableCheckins(data));
