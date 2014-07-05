'use strict';


$(document).ready(function () {
    var $dds = $('dd');
    $dds.hide();
    $dds.first().show();

    $(document).on('click', 'dt', function () {
        $dds.hide();
        $(this).next('dd').show();
    });
});
