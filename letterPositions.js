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

const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    return console.log(`Assertion Failed: ${array1} does not equal ${array2}`);
  } else {
    return console.log(`Assertion Passed: ${array1} === ${array2}`);
  }
};

//This function, when given a string, will return an object of the indexes of all the letters.
const string = "HELLO and goodbye"

const letterPositions = function(string) {
  let output = {};
  for (let index = 0; index < string.length; index++) {
    if (output[string[index]] === undefined) {
      output[string[index]] = [index];
    } else {
      output[string[index]].push(index);
    }
  }
  return output;
};

// Testing
assertArraysEqual(letterPositions(string)["L"], [ 2, 3 ]);
assertArraysEqual(letterPositions(string)[" "], [ 5, 9 ]);
assertArraysEqual(letterPositions(string)["d"], [ 8, 13 ]);
assertArraysEqual(letterPositions(string)["O"], [ 4 ]);