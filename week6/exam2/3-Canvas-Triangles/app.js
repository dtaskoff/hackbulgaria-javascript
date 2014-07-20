'use strict';


$(document).ready(function () {
    console.log('jquery maybe?');

    var canvas = $('#triangle-canvas')[0],
        canvasMargin = point(canvas.getBoundingClientRect().left,
                        canvas.getBoundingClientRect().top),
        ctx = canvas.getContext('2d'),

        clicks = 0,
        triangleCoordinates = [],
        currentColour = colour('#0000ff', '#0000ff'),

        canvasTemplate = Handlebars.compile($('#canvas-template').html()),

        afterFirstMouseClick = function (mouseCoordinates) {
            var firstPoint = triangleCoordinates[clicks - 1];
            line(firstPoint, mouseCoordinates).draw(ctx);
        },
        afterSecondMouseClick = function (mouseCoordinates) {
            var firstPoint = triangleCoordinates[clicks - 2],
                secondPoint = triangleCoordinates[clicks - 1];
            triangle(firstPoint, secondPoint, mouseCoordinates).draw(ctx);
        },
        afterThirdMouseClick = function (mouseCoordinates) {
            mouseCoordinates.draw(ctx);
        },
        mouseClickEvents = [afterThirdMouseClick,
            afterFirstMouseClick,
            afterSecondMouseClick
        ],

        clearCanvas = function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        },
        deleteTriangles = function () {
            triangleCoordinates = [];
            clicks = 0;
        },
        drawAllTriangles = function (ctx) {
            var firstPoint,
                secondPoint,
                thirdPoint,
                i;

            for (i = 0; i < clicks - 2; i += 3) {
                firstPoint = triangleCoordinates[i];
                secondPoint = triangleCoordinates[i + 1];
                thirdPoint = triangleCoordinates[i + 2];
                triangle(firstPoint, secondPoint, thirdPoint).draw(ctx);
            }
        },
        getFromStorage = function (canvasId) {
            var storage = JSON.parse(window.localStorage.getItem(canvasId));
            return storage.map(function convertToPointObject(pointFromStorage) {
                return point(pointFromStorage.x, pointFromStorage.y,
                                colour(pointFromStorage.colour.stroke,
                                        pointFromStorage.colour.fill))
            });
        },
        nameToId = function (canvasName) {
            return 'canvas-' + canvasName.replace(/ /g, '%');
        },
        idToName = function (canvasId) {
            return canvasId.slice(7).replace(/%/g, ' ');
        },
        clearCanvasesList = function () {
            $('#saved-canvases').empty();
        },
        loadFromLocalStorage = function () {
            Object.keys(localStorage).filter(function isSavedCanvas(item) {
                return item.slice(0, 7) === 'canvas-';
            }).forEach(function addCanvasToCanvasesList(canvasId) {
                $('#saved-canvases')
                    .append(canvasTemplate({
                        canvasName: idToName(canvasId),
                        canvasId: canvasId
                    }));
            });
        };

    loadFromLocalStorage();

    $(document).on('click', '#triangle-canvas', function (event) {
        var mousePosition = point(event.clientX - canvasMargin.x,
                                event.clientY - canvasMargin.y,
                                currentColour, ctx);
        triangleCoordinates[clicks] = mousePosition;
        clicks += 1;
    });

    $(document).on('mousemove', '#triangle-canvas', function (event) {
        var mousePosition = point(event.clientX - canvasMargin.x,
                                event.clientY - canvasMargin.y,
                                currentColour, ctx);
        clearCanvas();
        drawAllTriangles(ctx);
        mouseClickEvents[clicks % 3](mousePosition);
    });

    $(document).on('click', '#colour-pick', function () {
        var strokeColour = $(this).siblings('#strokeColourPicker').val(),
            fillColour = $(this).siblings('#fillColourPicker').val();
        currentColour = colour(strokeColour, fillColour);
    });

    $(document).on('click', '#clear-canvas', function () {
        clearCanvas();
        deleteTriangles();
    });

    $(document).on('click', '#save-canvas', function () {
        var canvasName = prompt('Enter a name for your canvas');
        window.localStorage.setItem(nameToId(canvasName),
            JSON.stringify(triangleCoordinates));
        clearCanvasesList();
        loadFromLocalStorage();
    });

    $(document).on('click', '#load-canvas', function () {
        var canvasName = prompt('Enter the name of the canvas you want to load');
        triangleCoordinates = getFromStorage(nameToId(canvasName));
        clicks = triangleCoordinates.length;
        clearCanvas();
        drawAllTriangles(ctx);
    });

    $(document).on('click', '#saved-canvases > li', function () {
        var canvasId = $(this).attr('id');
        triangleCoordinates = getFromStorage(canvasId);
        clicks = triangleCoordinates.length;
        clearCanvas();
        drawAllTriangles(ctx);
    });
});

var colour = function (strokeColour, fillColour) {
    var setColour = function (ctx) {
        if (strokeColour !== undefined) {
            ctx.strokeStyle = this.stroke;
        }
        if (fillColour !== undefined) {
            ctx.fillStyle = this.fill;
        }
    };

    return {
        fill: fillColour,
        stroke: strokeColour,
        set: setColour
    };
};

var point = function (xCoordinate, yCoordinate, pointColour) {
    var drawPoint = function (ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.closePath();
        pointColour.set(ctx);
        ctx.stroke();
        ctx.fill();
    };

    return {
        x: xCoordinate,
        y: yCoordinate,
        colour: pointColour,
        draw: drawPoint
    };
};

var line = function (pointA, pointB) {
    var drawLine = function (ctx) {
        ctx.beginPath();
        ctx.moveTo(this.a.x, this.a.y);
        ctx.lineTo(this.b.x, this.b.y);
        ctx.closePath();
        pointB.colour.set(ctx);
        ctx.stroke();
        ctx.fill();
    };

    return {
        a: pointA,
        b: pointB,
        draw: drawLine
    };
};

var triangle = function (pointA, pointB, pointC) {
    var drawTriangle = function (ctx) {
        ctx.beginPath();
        ctx.moveTo(this.a.x, this.a.y);
        ctx.lineTo(this.b.x, this.b.y);
        ctx.lineTo(this.c.x, this.c.y);
        ctx.closePath();
        pointC.colour.set(ctx);
        ctx.stroke();
        ctx.fill();
    };

    return {
        a: pointA,
        b: pointB,
        c: pointC,
        draw: drawTriangle
    };
};
