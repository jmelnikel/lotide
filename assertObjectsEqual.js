// Here Temporarily
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

// Do two objects triple equal?
// This function is given two objects as arguments. It will print to the console if the objects given equal or not.
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    return console.log(`Assertion Failed: ${inspect(actual)} does not equal ${inspect(expected)}`);
  } else {
    return console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};


// Testing
const object1 = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const object2 = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertObjectsEqual(object1, object2);