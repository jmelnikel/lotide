// Here temporarily
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} does not equal ${expected}`);
  }
};

// This function will take the first item of an array and return the value (not in an array).
const head = function(array) {
  return array[0];
};


// Testing
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "hello");
assertEqual(head([5, 6, 7]), 6);
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);

