'use strict';


var pluck = require('./pluck').pluck;

var students = [{
  'name' : 'Daniel Taskoff',
  'course' : 'Frontend JavaScript'
}, {
  'name' : 'Elena Jeleva',
  'course' : 'Programming 101'
}, {
  'name' : 'Luboslava Dimitrova',
  'course' : 'Frontend JavaScript'
}];

exports.testPluck = function (test) {
    test.deepEqual(['Daniel Taskoff', 'Elena Jeleva', 'Luboslava Dimitrova'],
        pluck('name', students));
    test.done();
};
