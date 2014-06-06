'use strict';


$(document).ready(function () {
    var studentsList = [],
        generateTableHead = function (table, properties) {
            table.append(['<thead>', '<tr>', '<th>',
                properties.join('</th><th>'), '</th>',
                '</tr>', '</thead>'].join(''));
        },
        generateTable = function (tableId, items, parentNode) {
            var table = $('<table class="table"></table>'),
                tbody = $('<tbody></tbody>');

            generateTableHead(table, ['id', 'name', 'course']);
            items.forEach(function (item) {
                var row = $('<tr><td>' +
                    [item.id, item.name, item.course].join('</td><td>') +
                    '</td></tr>');
                row.attr('id', 'student-' + item.id);
                tbody.append(row);
            });
            table.append(tbody);
            parentNode.append(table);
        };

    $.getJSON('http://localhost:3000/students', function (students, textStatus) {
        var row = $('<div class="row"></div>');
        console.log(textStatus);
        studentsList = students;
        $('.table-container').append(row);
        generateTable('init-table', studentsList, row);
    });

    $('#group-btn').on('click', function () {
        var tableContainer = $('.table-container'),
            counter = 0,
            groupedStudents = groupBy(studentsList, 'course'),
            row, col;
        tableContainer.empty();

        for (var group in groupedStudents) {
            if (counter % 3 === 0) {
                row = $('<div class="row"></div>');
                tableContainer.append(row);
            }
            col = $('<div class="col-xs-4"></div>');
            generateTable(group, groupedStudents[group], col);
            row.append(col);
            counter += 1;
        }
    });

    $('#search-btn').on('click', function () {
        var searched = $('#search-box').val(),
            studentIds = searchFor(searched, studentsList);
        $('.success').removeClass('success');
        studentIds.forEach(function (studentId) {
            $('#' + studentId).addClass('success');
        });
    });
});

var groupBy = function (objects, property) {
    var result = {};
    objects.forEach(function (obj) {
        if (result[obj[property]]) {
            result[obj[property]].push(obj);
        } else {
            result[obj[property]] = [obj];
        }
    });
    return result;
};

var searchFor = function (searched, objects) {
    var ids = [];
    console.log(objects);
    objects.forEach(function (obj) {
        if (obj.name.indexOf(searched) > -1) {
            ids.push('student-' + obj.id);
        }
    });
    return ids;
};
