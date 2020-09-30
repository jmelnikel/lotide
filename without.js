// Here Temporarily
const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    return console.log(`Assertion Failed: ${array1} does not equal ${array2}`);
  }
  for (let index in array1) {
    if (array1[index] !== array2[index]) {
      return console.log(`Assertion Failed: ${array1} does not equal ${array2}`);
    }
  }
  return console.log(`Assertion Passed: ${array1} === ${array2}`);
};


// This function takes in a source array and an itemsToRemove array and will return an array with only those elements in the source array that are not present in the itemsToRemove array. This function will not take in nested arrays or arrays of objects.

const words = ["dog", "cat", "mouse", "chicken"];
const numbers = [2, 5, -4, 23, 63];

const without = function(source, itemsToRemove) {
  let outputArray = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      outputArray.push(item);
    }
  }
  return outputArray;
};

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