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