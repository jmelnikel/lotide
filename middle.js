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

// This function will take an array and return an array with the middle element or elements if the middle falls between two items.

const middle = function(array) {
  const length = array.length;
  if (length < 3) {
    return [];
  }

  const middleIndexToUse = Math.ceil(length / 2) - 1;
  let output = [];
  if (length % 2 === 0) {
    output.push(array[middleIndexToUse]);
    output.push(array[middleIndexToUse + 1]);
  } else {
    output.push(array[middleIndexToUse]);
  }
  return output;
};

assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [3]);
assertArraysEqual(middle([1]), [1]);
assertArraysEqual(middle([1, 2]), [1, 2]);