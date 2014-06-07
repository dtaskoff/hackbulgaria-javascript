'use strict';


$(document).ready(function () {
    var studentsList = [];
    $('#course-pick').on('change', function () {
        var selectedStudents = getStudentsByCourse(studentsList, $(this).val());
        $('#student-pick').empty();

        for (var index in selectedStudents) {
            var $option = $('<option>').text(selectedStudents[index].name);
            $('#student-pick').append($option);
        }
        $('#student-pick').trigger('change');
    });
    $('#student-pick').on('change', function () {
        var info = getStudentInfo(studentsList, $(this).val());
        info = ['Github for ', info[0], ' is ', info[1]];
        $('#github-info').text(info.join(''));
    });
    $.getJSON('http://localhost:3000/students',
        function(students, textStatus) {
            studentsList = students;
            console.log(textStatus);
            var courses = getCourses(students);
            for (var course in courses) {
                var $option = $('<option>').text(course);
                $('#course-pick').append($option);
            }
            $('#course-pick').trigger('change');
            $('#student-pick').trigger('change');
        });
});

var getCourses = function (students) {
    var courses = {};
    students.forEach(function (student) {
        if (courses[student.course] === undefined) {
            courses[student.course] = true;
        }
    });
    return courses;
};

var getStudentsByCourse = function (students, course) {
    return students.filter(function (student) {
        return student.course === course;
    });
};

var getStudentInfo = function (students, name) {
    var student = students.filter(function (s) {
        return s.name === name;
    })[0];
    return [student.name, student.github];
};
