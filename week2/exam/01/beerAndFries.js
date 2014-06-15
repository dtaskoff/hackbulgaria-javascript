'use strict';


var insert = function (item, items) {
    var index = 0;

    while (items[index] < item) {
        index += 1;
    }
    items.splice(index, 0, item);

    return items;
};

var beerAndFries = function (items) {
    var beers = [],
        fries = [],
        scores = [];

    items.forEach(function (item) {
        // insert() places item's score in beers
        // or fries while keeping them sorted
        if (item.type === 'beer') {
            insert(item.score, beers);
        } else {
            insert(item.score, fries);
        }
    });

    scores = beers.map(function (beerScore, index) {
        return beerScore * fries[index];
    });

    return scores.reduce(function (a, b) { return a + b; }, 0);
};

exports.insert = insert;
exports.beerAndFries = beerAndFries;
