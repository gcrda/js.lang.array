var ArrayC = require('../src/array');

var map = {};

map[0] = 1;
map[1] = [1, 2];
map[2] = [3];

var s = ArrayC.singleize(map);

//console.log(s);