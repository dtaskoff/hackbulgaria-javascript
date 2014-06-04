'use strict';


Function.prototype.curry = function () {
    var slice = Array.prototype.slice,
        args = slice.apply(arguments),
        that = this;
    return function (  ) {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
};

var nestedLists = function (type, list) {
    var listOpen = ['<', type, '>'].join(''),
        listClose = ['</', type, '>'].join(''),
        listItem = function (item) {
            return ['<li>', item, '</li>'].join('');
        },
        result = [listOpen],
        nestedListsRecursion = function nestedListsRecursion(level) {
            list.forEach(function (item) {
                if (!item.hasOwnProperty('label')) {
                    throw {
                        name: 'TypeError',
                        message: 'Invalid argument passed to nestedLists!'
                    };
                } else if (item.hasOwnProperty('children')) {
                    result.push([indent(level), '<li>', item.label].join(''));
                    result.push([indent(level + 1), listOpen].join(''));
                    list = item.children;
                    nestedListsRecursion(level + 2);
                    result.push([indent(level + 1), listClose].join(''));
                    result.push([indent(level), '</li>'].join(''));
                } else {
                    result.push([indent(level), listItem(item.label)].join(''));
                }
            });
        };
    nestedListsRecursion(1);
    result.push(listClose);
    return result.join('\n');
};

var indent = function (levels) {
    var tabs = range(1, levels);
    tabs = tabs.map(function ( ) { return '\t'; });
    return tabs.join('');
};

var range = function (from, to) {
    var result = [];
    while (from <= to) {
        result.push(from);
        from += 1;
    }
    return result;
};

var ol = nestedLists.curry('ol');
var ul = nestedLists.curry('ul');

console.log(ol([{ 'label': 'Item 1'}, { 'label': 'Item 2'},
    { 'label': 'Item 3', 'children': [
        {'label': 'Item 4'}, {'label': 'Item 5'}
    ]}]));

console.log(ul([{ 'label': 'Item 1'}, { 'label': 'Item 2'},
    { 'label': 'Item 3', 'children': [
        {'label': 'Item 4'}, {'label': 'Item 5'}
    ]}]));
