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

// Do two arrays triple equal?
// This function is given two arrays as arguments. It will print to the console if the arrarys given equal or not. The equality is not just in content, but order and index position of the elements.

const assertArraysEqual = function(array1, array2) {
    if (!eqArrays(array1, array2)) {
      return console.log(`Assertion Failed: ${array1} does not equal ${array2}`);
    } else {
      return console.log(`Assertion Passed: ${array1} === ${array2}`);
    }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);