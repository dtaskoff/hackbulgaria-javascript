'use strict';


$(document).ready(function () {
    var counter = 0,
        paragraphs = {};
    $('p').each(function (index, element) {
        paragraphs[index] = '.' + $(element).attr('class');
    });
    $('button').on('click', function () {
        $('.highlight').removeClass('highlight');
        $('#mightyParagraphHolder')
            .find(paragraphs[counter % 3])
            .addClass('highlight');
        counter += 1;
    });
});
