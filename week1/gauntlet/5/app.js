'use strict';


$(document).ready(function () {
    var number,
        guessed,
        startNewGame = function () {
            number = parseInt(Math.random() * 10000000000);
            guessed = 0;
            $('#number').text(number);
            $('#guessed').text('');
        };

    startNewGame();
    $('.btn').on('click', function () {
        if ($(this).hasClass('btn-warning')) {
            guessed = parseInt(guessed / 10, 10);
            $('#guessed').text(guessed);
        } else {
            var digit = parseInt($(this).text(), 10);
            guessed *= 10;
            guessed += digit;
            $('#guessed').text(guessed);
            if (number / guessed === 1) {
                alert('you won!');
                startNewGame();
            }
        }
    });
});
