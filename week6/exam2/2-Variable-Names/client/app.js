'use strict';


$(document).ready(function () {
    console.log('jquery maybe?');
    var $namesContainer = $('#names-container'),
        entryTemplate = Handlebars.compile($('#entry-template').html()),
        makeGetRequestTo = function (url, done, error, always) {
            $.ajax(url)
                .done(done)
                .error(error)
                .always(always);
        },
        addEntriesToPage = function (entriesArray) {
            entriesArray.forEach(function (entry) {
                appendEntryToHTML(entry);
            });
        },
        appendEntryToHTML = function (entry) {
            $namesContainer.append(entryTemplate(entry));
        },
        makePostRequestTo = function (url, data, done, error, always) {
            $.ajax({
                url: url,
                type: 'POST',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(data)
            }).done(done)
            .error(error)
            .always(always);
        },
        getId = function ($inputOrButtonElement) {
            return $inputOrButtonElement.attr('id').split('-')[0];
        },
        clearEntries = function () {
            $('#names-container').empty();
        };

    makeGetRequestTo('http://localhost:8080/names', addEntriesToPage,
        function error() {
            alert('Couldn\'t get names from server!');
        });

    $(document).on('change', '.name-input', function () {
        var id = getId($(this)),
            correspondingButton = $('#' + id + '-btn');
        correspondingButton.removeClass('disabled');
    });

    $(document).on('click', '.btn', function () {
        var $button = $(this),
            id = getId($(this)),
            newName = $('#' + id + '-name').val();
        makePostRequestTo('http://localhost:8080/name',
            {
                name: newName,
                nameId: id
            },
            function done() {
                $button.addClass('disabled');
            },
            undefined,
            function always(res) {
                alert(res.status);
            });
        clearEntries();
        makeGetRequestTo('http://localhost:8080/names', addEntriesToPage,
            function error() {
                alert('Couldn\'t refresh entries!');
        });
    });
});
