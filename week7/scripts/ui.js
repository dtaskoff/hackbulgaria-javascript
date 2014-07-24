require.config({
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery',
        'handlebars': '../bower_components/handlebars/handlebars'
    }
});

define(['jquery', 'handlebars'], function () {
    var UI = function () {
        var matrixRowTemplate = Handlebars.compile($('#matrix-row-template').html());
        var matrixTable = $('#matrix');
        var addMatrixOperationsButtons = function (operations) {
            operations.forEach(function (operation) {
                matrixTable.append('<button id="' +
                    operation.replace(/ /g, '-') +
                    '">' + operation + '</button>');
            });
            $(document).on('click', '#scalar-multiply', function () {
                var scalar = parseInt(prompt('enter scalar: '), 10);
            });
        };
        this.testHandlebars = function () {
            console.log(matrixRowTemplate({
                array: [1, 2, 3]
            }));
        };
        this.getRowsAndColumnsAsInput = function () {
            var rows = prompt('enter rows of matrix: '),
                columns = prompt('enter columns of matrix: ');
            return {
                rows: parseInt(rows, 10),
                columns: parseInt(columns, 10)
            };
        };
        this.generateMatrixInput = function (rows, columns) {
            for (var i = 0; i < rows; i += 1) {
                var row = [];
                for (var j = 0; j < columns; j += 1) {
                    row.push(i + '' + j);
                }
                matrixTable.append(matrixRowTemplate({
                    array: row
                }));
            }
            addMatrixOperationsButtons(['add', 'scalar multiply']);
        };
    };

    return UI;
});
