'use strict';


$(document).ready(function () {
    var books = [],
        book_template = $('#single-book-template').html(),
        purchase_template = $('#purchased-book-template').html(),
        description_template = $('#description-template').html(),
        nextId = 0,
        $pages = $('#pages'),
        encode = function (book) {
            book.title = $('<div>' + book.title + '</div>').text();
            book.description = $('<div>' + book.description + '</div>').text();
            book.title = $('<div>' + book.title + '</div>').text();
            book.description = $('<div>' + book.description + '</div>').text();
        },
        addBook = function (book) {
            encode(book);
            books.push(book);
            book.id = nextId;
            nextId += 1;
            $('#books-container')
                .append(_.template(book_template, book));
        };

    $(document).on('click', '.add-to-cart', function () {
        var $div = $(this).closest('.book'),
            id = $div.attr('id').slice(5),
            newDiv = _.template(purchase_template, books[id]);

            $('#purchased-books-container')
                .append(newDiv);
            $div.remove();
            $pages.text(parseInt($pages.text(), 10) +
                books[id].num_pages);
    });

    $(document).on('click', '.remove-from-cart', function () {
        var $div = $(this).closest('.book'),
            id = $div.attr('id').slice(5),
            newDiv = _.template(book_template, books[id]);

            $('#books-container')
                .append(newDiv);
            $div.remove();
            $pages.text(parseInt($pages.text(), 10) -
                books[id].num_pages);
    });

    $(document).on('click', '.description', function () {
        var $div = $(this).closest('.book'),
            id = $div.attr('id').slice(5),
            modal = _.template(description_template, books[id]);
            console.log(modal);
            $(modal).modal({
                show: true
            });
    });

    $.getJSON('http://localhost:3000/books', function (booksToLoad) {
        booksToLoad.forEach(addBook);
    });
});
