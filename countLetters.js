// Here Temporarily
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`Assertion Failed: ${actual} does not equal ${expected}`);
  }
};


// This function will take in a string and count the occurance of each letter as an object.
const countLetters = function(string) {
  let usableString = string.split(" ").join("")
  let output = {};
  for (let letter of usableString) {
    if (output[letter] === undefined) {
      output[letter] = 1;
    } else {
      output[letter] += 1;
    }
  }
  return output;
};

// Testing
const string = "UPPERCASE and lowercase";

assertEqual(countLetters(string)["a"], 2);
assertEqual(countLetters(string)["A"], 1);
assertEqual(countLetters(string)["p"], undefined);
assertEqual(countLetters(string)["P"], 2);