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
            console.log(students);
            $.each(students, function (index, student) {
                $('tbody').append(studentTemplate(student));
            });
        };
        selectTab('#show-students');

    $(document).on('click', '.nav > li > a', function () {
        var href = $(this).attr('href');
        selectTab(href);
        $buttons.removeClass('active');
        $(this).closest('li').addClass('active');
    });

    $.ajax({
        url: mainURL + '/students',
        type: 'GET'
    }).done(createStudentsTable);
});
