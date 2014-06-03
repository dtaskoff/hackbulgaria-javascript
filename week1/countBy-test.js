'use strict';


var countBy = require('./countBy').countBy;

var students = [{
  'name': 'Daniel Taskoff',
  'course': 'Frontend JavaScript'
}, {
  'name': 'Nikola Dichev',
  'course': 'Core Java'
}];

exports.testCountBy = function (test) {
    test.deepEqual({ 'Frontend JavaScript': 1,
            'Core Java': 1},
        countBy(function (student) {
            return student.course;
        }, students));
    test.done();
};
