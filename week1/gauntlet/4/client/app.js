'use strict';


$(document).ready(function () {
    var groupedStudents = {},
        selectedStudents = [];

    $('#course-pick').on('change', function () {
        selectedStudents = groupedStudents[$(this).val()];

        $('#student-pick').empty();

        selectedStudents.forEach(function (student) {
            $('#student-pick').append($('<option>')
                .text(student.name)
                .data('github', student.github));
        });

        $('#student-pick').trigger('change');
    });

    $('#student-pick').on('change', function () {
        var selected = $(this).find('option:selected');
        $('#github-info')
            .text(['Github for ',
                selected.text(),
                ' is ',
                selected.data('github')]
                .join(''));
    });

    $.getJSON('http://localhost:3000/students',
        function(students, textStatus) {
            console.log(textStatus);

            groupedStudents = groupBy(students, function (student) {
                return student.course;
            });

            for (var course in groupedStudents) {
                $('#course-pick').append($('<option>')
                    .text(course));
            }

            $('#course-pick').trigger('change');
            $('#student-pick').trigger('change');
        });
});

var groupBy = function (list, func) {
    var result = {},
        current;
    list.forEach(function (item) {
        current = func(item);
        if (result[current] === undefined) {
            result[current] = [item];
        } else {
            result[current].push(item);
        }
    });
    return result;
};
