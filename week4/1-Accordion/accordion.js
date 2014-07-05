'use strict';


$(document).ready(function () {
    var $dds = $('dd');
    $dds.hide();

    $(document).on('click', 'dt', function () {
        $dds.hide();
        $(this).next('dd').show();
    });
});
