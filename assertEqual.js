// Do two values triple equal?
// This function is given two primitive datatype values as arguments. It will print to the console if the values given triple equal or not.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} does not equal ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 10);
assertEqual(1, "1");
