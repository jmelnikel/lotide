const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [3]);
assertArraysEqual(middle([1]), [1]);
assertArraysEqual(middle([1, 2]), [1, 2]);