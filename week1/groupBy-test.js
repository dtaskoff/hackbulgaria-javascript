'use strict';


var groupBy = require('./groupBy').groupBy;

var students = [{
  'name': 'Daniel Taskoff',
  'course': 'Frontend JavaScript'
}, {
  'name': 'Nikola Dichev',
  'course': 'Core Java'
}];

exports.testGroupBy = function (test) {
    test.deepEqual({ 'Frontend JavaScript':
            [ { name: 'Daniel Taskoff', course: 'Frontend JavaScript' } ],
            'Core Java':[ { name: 'Nikola Dichev', course: 'Core Java' } ] },
        groupBy(function (student) {
            return student.course;
        }, students));
    test.done();
};
