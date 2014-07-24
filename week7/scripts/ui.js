require.config({
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery'
    }
});

define(['jquery'], function ($) {
    var UI = function () {
        var matrixDiv = $('#matrix');
        var addMatrixOperationsButtons = function (operations) {
            operations.forEach(function (operation) {
                matrixDiv.append('<button id="' + operation + '">' + operation + '</button>');
            });
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
                for (var j = 0; j < columns; j += 1) {
                    matrixDiv.append('<input type="number">');
                }
                matrixDiv.append('<br>');
            }
            addMatrixOperationsButtons(['add', 'scalar multiply']);
        };
    };

    return UI;
});
