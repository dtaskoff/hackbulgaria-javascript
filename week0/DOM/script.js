'use strict';


var students = {
  'students': [
    {
      'name' : 'Daniel Taskoff',
      'course' : 'Frontend JavaScript'
    }, {
      'name' : 'Elena Jeleva',
      'course' : 'Programming 101'
    }, {
      'name' : 'Luboslava Dimitrova',
      'course' : 'Frontend JavaScript'
    }, {
      'name' : 'Anton Antonov',
      'course' : 'Core Java'
    }, {
      'name' : 'Nikola Dichev',
      'course' : 'Core Java'
    }
  ]
};

var getName = function (student) {
    return student.name;
};

var getCourse = function (student) {
    return student.course;
};

var createTable = function (name) {
    var div = document.getElementById('tables');
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var tr = document.createElement('tr');
    var names = document.createElement('th');
    var courses = document.createElement('th');

    table.setAttribute('class', 'table table-hover');
    table.setAttribute('id', name);
    names.innerHTML = 'name';
    courses.innerHTML = 'course';

    tr.appendChild(names);
    tr.appendChild(courses);
    thead.appendChild(tr);
    table.appendChild(thead);
    table.appendChild(tbody);
    div.appendChild(table);
};

var addStudentToTable = function (student, tableName) {
    var table = document.getElementById(tableName);
    var tbody = table.firstElementChild.nextSibling;
    console.log(tbody);
    var tr = document.createElement('tr');
    var name = document.createElement('td');
    var course = document.createElement('td');
    name.innerHTML = getName(student);
    course.innerHTML = getCourse(student);
    tr.appendChild(name);
    tr.appendChild(course);
    tbody.appendChild(tr);
};

createTable('js');
students.students.forEach(function (student) {
    addStudentToTable(student, 'js');
});
