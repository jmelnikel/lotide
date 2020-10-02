// Here Temporarily
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`Assertion Failed: ${actual} does not equal ${expected}`);
  }
};

// This function will take two objects and compare them and will return true or false based on if they are equal to eachother.
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let item in object1) {
    if (object1[item] !== object2[item]) {
      return false;
    }
  }
  return true;
};

// Testing
const object1 = { a: "1", b: "2" };
const object2 = { b: "2", a: "1" };
const object3 = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(object1, object2), true); // => true
assertEqual(eqObjects(object1, object3), false); // => false