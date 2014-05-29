"use strict";


var nth_fibonacci = function(n) {
  var a = 0, b = 1, i = 0;

  while (i < n) {
    b = a + b;
    a = b - a;
    ++i;
  }
  return a;
};

exports.nth_fibonacci = nth_fibonacci;
