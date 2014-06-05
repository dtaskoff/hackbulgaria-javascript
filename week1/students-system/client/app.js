'use strict';


$(document).ready(function() {
    var studentsList = [],
        generateTableHead = function (table, properties) {
            var thead = document.createElement('thead'),
                tr = document.createElement('tr');
            properties.forEach(function (property) {
                var th = document.createElement('th');
                th.innerHTML = property;
                tr.appendChild(th);
            });
            thead.appendChild(tr);
            table.appendChild(thead);
        },
        generateTable = function (tableId, items, parentNode) {
            var table = document.createElement('table'),
                tbody = document.createElement('tbody');
            generateTableHead(table, ['id', 'name', 'course']);
            items.forEach(function (item) {
                var row = document.createElement('tr'),
                    itemID = document.createElement('td'),
                    itemName = document.createElement('td'),
                    itemCourse = document.createElement('td');
                itemID.innerHTML = item.id;
                itemName.innerHTML = item.name;
                itemCourse.innerHTML = item.course;
                row.setAttribute('id', 'student-' + item.id.toString());
                row.appendChild(itemID);
                row.appendChild(itemName);
                row.appendChild(itemCourse);
                tbody.appendChild(row);
            });
        table.appendChild(tbody);
        table.setAttribute('id', tableId);
        table.setAttribute('class', 'table');
        parentNode.appendChild(table);
    };

    $.getJSON('http://localhost:3000/students', function(students, textStatus) {
        console.log(textStatus);
        studentsList = students;
        var div = document.getElementById('students');
        var row = document.createElement('div');
        row.setAttribute('class', 'row');
        div.appendChild(row);
        generateTable('init-table', studentsList, row);
    });

    $('#group-btn').on('click', function() {
        var initTable = document.getElementById('init-table'),
            parentDiv = initTable.parentNode,
            studentsSorted = groupBy(studentsList, 'course'),
            div = document.getElementById('students'),
            counter = 0,
            row = document.createElement('div');
            row.setAttribute('class', 'row');
        parentDiv.removeChild(initTable);

        for (var students in studentsSorted) {
            counter += 1;
            var innerDiv = document.createElement('div');
            innerDiv.setAttribute('class', 'col-xs-4');
            generateTable(students, studentsSorted[students], innerDiv);
            row.appendChild(innerDiv);
            if (counter % 3 === 0) {
                div.appendChild(row);
                row = document.createElement('div');
                row.setAttribute('class', 'row');
            }
        }
        if (counter % 3 !== 0) {
            div.appendChild(row);
        }
    });

    $('#search-btn').on('click', function() {
        var searched = $('#search-box').val(),
            studentIds = searchFor(searched, studentsList),
            oldTrs = document.getElementsByClassName('success');
        for (var i = 0; i < oldTrs.length; i += 1) {
            oldTrs[i].removeAttribute('class');
        }
        studentIds.forEach(function (studentId) {
            var tr = document.getElementById(studentId);
            tr.setAttribute('class', 'success');
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
        if (obj.name.split(' ').indexOf(searched) > -1) {
            ids.push('student-' + obj.id);
        }
    });
    return ids;
};
