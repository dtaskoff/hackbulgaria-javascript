'use strict';


$(document).ready(function () {
    var $divs = $('div');
    $divs.hide();
    $divs.first().show();

    $(document).on('click', '.tabs > li > a', function () {
        var href = $(this).attr('href');
        $divs.hide();
        $(href).show();
    });
});
