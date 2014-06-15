'use strict';


$(document).ready(function () {
    var $minutes = $('#minutes'),
        $seconds = $('#seconds'),
        $timer = $('#timer'),
        intervalID,
        timer,
        count = function (timer, direction) {
            return function () {
                $timer.text(timer[direction]);
                if (timer.expired()) {
                    $('#reset').trigger('click');
                    window.alert('timer expired!');
                }
            };
        },
        setTimer = function (direction) {
            $('#reset').trigger('click');
            timer = time($minutes.val(), $seconds.val());
            intervalID = setInterval(count(timer, direction), 1000);
        };

    $('#count-up').on('click', function () {
        setTimer('up');
    });

    $('#count-down').on('click', function () {
        setTimer('down');
    });

    $('#reset').on('click', function () {
        clearInterval(intervalID);
        $timer.text('00:00');
    });
});

var time = function (minutesTo, secondsTo) {
    var minutesFrom = 0,
        secondsFrom = 0,
        printable = function (mins, secs) {
            return [mins < 10 ? '0' + mins : mins,
                    ':',
                    secs < 10 ? '0' + secs : secs].join('');
        };
    minutesTo = parseInt(minutesTo, 10);
    secondsTo = parseInt(secondsTo, 10);

    return {
        up: function () {
            secondsFrom += 1;
            if (secondsFrom > 59) {
                secondsFrom = 0;
                minutesFrom += 1;
            }
            return printable(minutesFrom, secondsFrom);
        },
        down: function () {
            secondsTo -= 1;
            if (secondsTo < 0) {
                secondsTo = 59;
                minutesTo -= 1;
            }
            return printable(minutesTo, secondsTo);
        },
        expired: function () {
            return minutesFrom === minutesTo &&
                secondsFrom === secondsTo;
        }
    };
};
