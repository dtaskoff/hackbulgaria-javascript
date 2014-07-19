'use strict';


var data = require('./data.json');


var getRepeatableCheckins = function (checkins) {
    var occurrencesOfCheckin  = {},
        repeatableCheckins = [];

    checkins.forEach(function (checkin) {
        var hashedCheckin = hash(checkin);

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
