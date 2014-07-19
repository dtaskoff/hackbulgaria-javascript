'use strict';


$(document).ready(function () {
    console.log('jquery maybe?');
    var $namesContainer = $('#names-container'),
        entryTemplate = Handlebars.compile($('#entry-template').html()),
        addEntriesToPage = function (entriesArray) {
            entriesArray.forEach(function (entry) {
                appendEntryToHTML(entry);
            });
        },
        appendEntryToHTML = function (entry) {
            $namesContainer.append(entryTemplate(entry));
        };

    $.ajax('http://localhost:8080/names')
        .done(addEntriesToPage)
        .error(function () {
            alert('Couldn\'t get names from server!');
        });

    $(document).on('change', '.name-input', function () {
        var id = $(this).attr('id').split('-')[0],
            correspondingButton = $('#' + id + '-btn');
        correspondingButton.removeClass('disabled');
    });

    $(document).on('click', '.btn', function () {
        var $button = $(this),
            id = $button.attr('id').split('-')[0],
            newName = $('#' + id + '-name').val();

        $.ajax({
            url: 'http://localhost:8080/name',
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({
                name: newName,
                nameId: id
            })
        }).done(function () {
            $button.addClass('disabled');
        }).always(function (res) {
            alert(res.status);
        });
    });
});
