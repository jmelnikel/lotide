// Here Temporarily
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index in array1) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    return console.log(`Assertion Failed: ${actual} does not equal ${expected}`);
  } else {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

// This function takes in an array of arrays and returns a one-level array with all the elements. This function only handles one level of nesting.

const flatten = function(arrayOfArrays) {
  let output = [];
  for (let item of arrayOfArrays) {
    if (!Array.isArray(item)) {
      output.push(item);
    } else {
      output = output.concat(item);
    }
  }
  return output;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);