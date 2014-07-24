define(function () {
    function Matrix(rows, columns) {
        var matrix = [];
        for (var i = 0; i < rows; i += 1) {
            matrix[i] = [];
        }

        this.getNumberOfRows = function () {
            return rows;
        };
        this.getNumberOfColumns = function () {
            return columns;
        };
        this.getRow = function (index) {
            return matrix[index];
        };
        this.getColumn = function (index) {
            return matrix.map(function (row) {
                return row[index];
            });
        };
        this.setRow = function (row, index) {
            matrix[index] = row;
        };
        this.setColumn = function (column, index) {
            matrix.forEach(function (row, i) {
                if (row === undefined) {
                    row = [];
                }
                row[index] = column[i];
            });
        };
        this.getAt = function (i, j) {
            return matrix[i][j];
        };
        this.setAt = function (i, j, value) {
            if (matrix[i] === undefined) {
                matrix[i] = [];
            }
            matrix[i][j] = value;
        };
        this.getData = function () {
            return matrix.slice();
        };
        this.toString = function () {
            var result = '';
            matrix.forEach(function (row) {
                row.forEach(function (element) {
                    result += element;
                    result += ' ';
                });
                result += '\n';
            });
            return result;
        };
    }

    return Matrix;
});
