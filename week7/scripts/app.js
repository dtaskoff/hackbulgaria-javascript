console.log('app.js loaded!');

require(['matrix', 'matrixOperations', 'ui'], function (Matrix, MatrixOperations, UI) {
    console.log('matrix, matrixOperations and UI loaded!');
    var uiTests = function () {
        var ui = new UI();
        var input = ui.getRowsAndColumnsAsInput();
        console.log(input.rows, input.columns);
        ui.generateMatrixInput(input.rows, input.columns);
    };
    uiTests();

    var matrixTests = function () {
        console.log('created matrix 2x2 with elements 1, 2, 3, 4');

        var matrix = new Matrix(2, 2);
        matrix.setAt(0, 0, 1);
        matrix.setAt(0, 1, 2);
        matrix.setAt(1, 0, 3);
        matrix.setAt(1, 1, 4);

        console.log('element at 1, 0: ' + matrix.getAt(1, 0));

        console.log('printing matrix:');
        console.log(matrix.toString());

        console.log('number of rows: ' + matrix.getNumberOfRows());
        console.log('number of columns: ' + matrix.getNumberOfColumns());

        console.log('setting element at 1, 0 to 5');
        matrix.setAt(1, 0, 5);
        console.log(matrix.getData().toString());

        console.log('setting first row to [3, 4]');
        matrix.setRow([3, 4], 1);
        console.log('first row: ' + matrix.getRow(1));

        console.log('setting first column to [3, 4]');
        matrix.setColumn([3, 4], 1);
        console.log('first column: ' + matrix.getColumn(1));
    };

    var matrixOperationsTests = function () {
        var matrixOperations = new MatrixOperations();
        console.log('creating matrix from data 4, 5, 6, 6, 7, 8');
        var createdMatrix = matrixOperations.createFromData([[4, 5, 6], [6, 7, 8]]);

        console.log('printing created matrix:');
        console.log(createdMatrix.toString());

        console.log('transposing created matrix');
        createdMatrix = matrixOperations.getTransposed(createdMatrix);
        console.log(createdMatrix.toString());

        console.log('adding created matrix with itself');
        createdMatrix = matrixOperations.getAddedMatrices(createdMatrix, createdMatrix);
        console.log(createdMatrix.toString());

        console.log('multiplying created matrix by 1/2');
        createdMatrix = matrixOperations.getScalarMultiplied(createdMatrix, 0.5);
        console.log(createdMatrix.toString());

        console.log('multiplying 1, 2, 3, 4 by 1, 2, 3, 4: ');
        var matrixToMultiply = matrixOperations.createFromData([[1, 2], [3, 4]]);
        var multipliedMatrices = matrixOperations
            .getMultipliedMatrices(matrixToMultiply, matrixToMultiply);
        console.log(matrixToMultiply.toString());
        console.log('x');
        console.log(matrixToMultiply.toString());
        console.log(multipliedMatrices.toString());
    };
    var runTests = function () {
        matrixTests();
        matrixOperationsTests();
    };
});
