// Here temporarily
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} does not equal ${expected}`);
  }
};

// This function will take two arrays and compare them and will return true or false based on if they are equal to eachother. The equality is not just in content, but order and index position of the elements.

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  for (let index in array1) {
    if (array1[index] !== array2[index]) {
      return false
    }
  }
  return true
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);