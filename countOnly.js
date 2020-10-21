// This function will be given and array of various items and an object that will indicate which items the function needs to work with (using a boolean). It will return an object containing counts of everything that the input object listed.
const countOnly = (allItemsArray, itemsToCountObject) => {
  let output = {};
  for (let item in itemsToCountObject) {
    // Produces eslint error: if (itemsToCountObject.hasOwnProperty(item) && itemsToCountObject[item] === true) {
    if (itemsToCountObject[item] === true) output[item] = 0;
  }
  for (let item of allItemsArray) {
    if (output[item] >= 0) output[item] += 1;
  }
  return output;
};

module.exports = countOnly;