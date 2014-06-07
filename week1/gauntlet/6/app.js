'use strict';


$(document).ready(function () {
    var $itemsImport = $('#items-import'),
        $itemsExport = $('#items-export');

    $.getJSON('http://localhost:3000/students',
        function(students, textStatus) {
            console.log(textStatus);
            students.map(function (student) {
                return student.name;
            }).forEach(function (name) {
                var $option = $('<option>').text(name);
                $itemsImport.append($option);
            });
        });

    $('#import').on('click', function () {
        $('#items-import option:selected').each(function () {
            $itemsExport.append($(this));
        });
    });

    $('#export').on('click', function () {
        $('#items-export option:selected').each(function () {
            $itemsImport.append($(this));
        });
    });
});
