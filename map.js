// Temporarilly Here
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

// This function will take in an array and a callback function to act on that array. It will then return the affected array.
const map = function(array, callback) {
  const output = [];
  for (let item of array) {
    output.push(callback(item));
  }
  return output;
};

const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words, word => word[0]), ["g", "C", "t", "m", "t"]);