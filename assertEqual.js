// Do two values triple equal?
// This function is given two primitive datatype values as arguments. It will print to the console if the values given triple equal or not.
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`Assertion Failed: ${actual} does not equal ${expected}`);
  }
};

module.exports = assertEqual;