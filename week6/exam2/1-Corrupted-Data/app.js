'use strict';


var data = require('./data.json');
var HashTable = require('hashtable');


var getRepeatableCheckins = function (checkins) {
    var occurrencesOfCheckin  = new HashTable(),
        repeatableCheckins = [];

    checkins.forEach(function (checkin) {
        // only adding checkin to repeatableCheckins,
        // if it occurs for a second time,
        // else just increment it's occurrences
        if (occurrencesOfCheckin.get(checkin) === undefined) {
            occurrencesOfCheckin.put(checkin, 0);
        } else if (occurrencesOfCheckin.get(checkin) === 1) {
            repeatableCheckins.push(checkin);
        }
        occurrencesOfCheckin.put(checkin,
            occurrencesOfCheckin.get(checkin) + 1);
    });

    return repeatableCheckins;
};

console.log(getRepeatableCheckins(data));
