// Here Temporarily
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`Assertion Failed: ${actual} does not equal ${expected}`);
  }
};

// This function,given an object and a value, will return the key of that given value from the object.
const findKeyByValue = function(object, value) {
  let key = undefined;
  for (let item in object) {
    if (object[item] === value) {
      key = item;
    }
  }
  return key;
};

// Testing
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);