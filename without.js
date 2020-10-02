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

// This function takes in a source array and an itemsToRemove array and will return an array with only those elements in the source array that are not present in the itemsToRemove array. This function will not take in nested arrays or arrays of objects.
const without = function(source, itemsToRemove) {
  let outputArray = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      outputArray.push(item);
    }
  }
  return outputArray;
};


// Testing
const words = ["dog", "cat", "mouse", "chicken"];
const numbers = [2, 5, -4, 23, 63];

assertArraysEqual(words, ["dog", "cat", "mouse", "chicken"]);
assertArraysEqual(numbers, [2, 5, -4, 23, 63]);
assertArraysEqual(without(words, ["cat"]), ["dog", "mouse", "chicken"]);
assertArraysEqual(without(numbers, [23, 2]), [5, -4, 63]);
assertArraysEqual(without(words, []), ["dog", "cat", "mouse", "chicken"]);
assertArraysEqual(without(numbers, [2, 5, -4, 23, 63]), []);

assertArraysEqual(words, ["dog", "cat", "mouse", "chicken", "elephant"]);
assertArraysEqual(numbers, [2, 5, 23, 63]);
assertArraysEqual(without(words, ["cat"]), ["dog", "mouse"]);
assertArraysEqual(without(numbers, [23, 2]), [5, -4, 63, 56]);
assertArraysEqual(without(words, []), ["dog", "cat", "mouse", "chicken", "elephant"]);
assertArraysEqual(without(numbers, [5, -4, 23, 63]), []);