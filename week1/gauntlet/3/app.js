'use strict';


$(document).ready(function() {
    var isValid = function (url, callback) {
        $('<img>', {
            src: url,
            error: function() {
                alert('bad url!');
            },
            load: function() { callback(); }
        });
    };
    $('#search-button').on('click', function () {
        var imageURL = $('#search-input').val();
        isValid(imageURL, function () {
            var $img = $('<img>').attr('src', imageURL);
            $img.on('click', function () {
                this.remove();
            });
            $('.container').append($img);
        });
    });
});
