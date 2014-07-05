'use strict';


$(document).ready(function () {
    var $main = $('#main-container'),
        $buttons = $('.nav > li'),
        studentTemplate = Handlebars.compile($('#student-template').html()),
        mainURL = 'http://localhost:3030',
        hideAllTabs = function () {
            $main.children().hide();
        },
        selectTab = function (tabID) {
            hideAllTabs();
            $(tabID).show();
        },
        createStudentsTable = function (students) {
            $.each(students, function (index, student) {
                $('tbody').append(studentTemplate(student));
            });
        },
        addStudentToDatabase = function (student) {
            $.ajax({
                url: mainURL + '/student',
                type: 'POST',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(student)
            }).done(function (res) {
                alert(res.status);
            });
        },
        deleteStudentFromDatabase = function (facultyNumber) {
            $.ajax({
                url: mainURL + '/student/' + facultyNumber,
                type: 'DELETE',
            }).done(function (res) {
                alert(res.status);
            });
        };
        selectTab('#show-students');

    $(document).on('click', '.nav > li > a', function () {
        var href = $(this).attr('href');
        selectTab(href);
        $buttons.removeClass('active');
        $(this).closest('li').addClass('active');
    });

    $(document).on('click', '#add-update-student',
        function () {
            addStudentToDatabase({
                name: $(this).siblings('.name').find('input').val(),
                facultyNumber: $(this).siblings('.fn').find('input').val(),
                courses: []
            });
        });

    $(document).on('click', '#delete-student', function () {
        var facultyNumber = $(this).closest('.fn').find('input').val();
        deleteStudentFromDatabase(facultyNumber);
    });

    $.ajax({
        url: mainURL + '/students',
        type: 'GET'
    }).done(createStudentsTable);
});
