// Temporarily Here.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`Assertion Failed: ${actual} does not equal ${expected}`);
  }
};

// This function takes and object and callback function. It will return the first key for which the callback fucnction returns a truthy value.
const findKey = function(object, callback) {
  for (let item in object) {
    if (callback(object[item])) {
      return item;
    }
  }
  return undefined;
};

let object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(object, x => x.stars === 2), "noma");
assertEqual(findKey(object, x => x.stars === 3), "noma");
assertEqual(findKey(object, x => x.stars === 4), undefined)
