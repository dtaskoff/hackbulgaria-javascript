'use strict';

var _ = require('lodash')._;

var htmlGenerator = (function () {
    var linkTemplate = ['<a href="', '<%= link %>',
            '" title="', '<%= title %>', '">',
            '<%= text %>', '</a>'].join(''),
        paragraphTemplate = ['<p>', '<%= label %>', '</p>'].join(''),
        listTemplate = ['<', '<%= type %>', '>',
            '<% _(children).forEach(',
            'function(child) { %><li><%- child.label %></li><% });',
            ' %>',
            '</', '<%= type %>', '>'].join(''),
        tagTemplate = ['<', '<%= tagName %>', 'id="',
            '<%= attribute.class %>', '" class="',
            '<%= attribute.id %>',
            '"">', '<%= data %>',
            '</', '<%= tagName %>', '>'].join('');
    return {
        link : function (data) {
            return _.template(linkTemplate, data);
        },
        paragraph: function (data) {
            return _.template(paragraphTemplate, data);
        },
        list: function (data) {
            return _.template(listTemplate, data);
        },
        tag: function (data) {
            return _.template(tagTemplate, data);
        }
    };
}());

var a = htmlGenerator.link({
    link: 'github.com/dtaskoff',
    title: 'dtaskoff@github',
    text: 'dtaskoff@github'
});
console.log(a);

var p = htmlGenerator.paragraph({ label: 'elementaryOS'});
console.log(p);

var l = htmlGenerator.list({
    type: 'ul',
    children: [{
        label: 'first'
    }, {
        label: 'second'
    }]
});
console.log(l);
