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
  if (object1 === null || object2 === null) {
    return false;
  }
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let item in object1) {
    if (typeof object1[item] === 'object' && object1[item] !== null) {
      if (!eqObjects(object1[item], object2[item])) {
        return false;
      }
    } else if (object1[item] !== object2[item]) {
      return false;
    }
  }
  return true;
};

// Testing
const object1 = { a: "1", b: "2" };
const object2 = { b: "2", a: "1" };
const object3 = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(object1, object2), true);
assertEqual(eqObjects(object1, object3), false);

// Testing for nested objects
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjects({ a: { y: null, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);