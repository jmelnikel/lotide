// Do two arrays triple equal?
// This function is given two arrays as arguments. It will print to the console if the arrarys given equal or not. The equality is not just in content, but order and index position of the elements.
const eqArrays = require("./eqArrays");

const assertArraysEqual = (actual, expected) => {
  if (!eqArrays(actual, expected)) {
    return console.log(`Assertion Failed: ${actual} does not equal ${expected}`);
  } else {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

module.exports = assertArraysEqual;