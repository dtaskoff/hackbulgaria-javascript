define(['matrix'], function (Matrix) {
    function MatrixOperations(rows, columns) {
        this.createFromData = function (data) {
            if (data === undefined) {
                return undefined;
            }
            var matrix = new Matrix(data.length, data[0].length);
            data.forEach(function (row, i) {
                row.forEach(function (element, j) {
                    matrix.setAt(i, j, element);
                });
            });
            return matrix;
        };
        this.getTransposed = function (matrix) {
            var result = new Matrix(matrix.getNumberOfColumns(),
                                    matrix.getNumberOfRows());

            var matrixToTranspose = matrix.getData();
            matrixToTranspose.forEach(function (row, i) {
                row.forEach(function (element, j) {
                    result.setAt(j, i, element);
                });
            });
            return result;
        };
        this.getAddedMatrices = function (matrix1, matrix2) {
            var result = new Matrix(matrix1.getNumberOfRows(),
                                    matrix1.getNumberOfColumns());
            matrix1.getData().forEach(function (row, i) {
                row.forEach(function (element, j) {
                    result.setAt(i, j, element + matrix2.getAt(i, j));
                });
            });
            return result;
        };
        this.getScalarMultiplied = function (matrix, scalar) {
            var result = new Matrix(matrix.getNumberOfRows(),
                                    matrix.getNumberOfColumns());
            matrix.getData().forEach(function (row, i) {
                row.forEach(function (element, j) {
                    result.setAt(i, j, element * scalar);
                });
            });
            return result;
        };
        this.getMultipliedMatrices = function (matrix1, matrix2) {
            var result = new Matrix(matrix1.getNumberOfRows(),
                                    matrix2.getNumberOfColumns());
            for (var i = 0; i < matrix1.getNumberOfRows(); i += 1) {
                for (var j = 0; j < matrix2.getNumberOfColumns(); j += 1) {
                    var sum = 0;
                    for (var k = 0; k < matrix1.getNumberOfColumns(); k += 1) {
                        sum += (matrix1.getAt(i, k) * matrix2.getAt(k, j));
                    }
                    result.setAt(i, j, sum);
                }

            }
            return result;
        };
    }

    return MatrixOperations;
});
