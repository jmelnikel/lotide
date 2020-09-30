// Here temporarily
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`Assertion Failed: ${actual} does not equal ${expected}`);
  }
};

// This function will be given and array of various items and an object that will indicate which items the function needs to work with (using a boolean). It will return an object containing counts of everything that the input object listed.

const countOnly = function(allItemsArray, itemsToCountObject) {
  let output = {};
  for (let item in itemsToCountObject) {
    // Produces eslint error: if (itemsToCountObject.hasOwnProperty(item) && itemsToCountObject[item] === true) {
    if (itemsToCountObject[item] === true) {
      output[item] = 0;
    }
  }
 
  for (let item of allItemsArray) {
    if (output[item] >= 0) {
      output[item] += 1;
    }
  }
  console.log(output);
  return output;
};



//Testing
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], 0);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);