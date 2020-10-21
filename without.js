// This function takes in a source array and an itemsToRemove array and will return an array with only those elements in the source array that are not present in the itemsToRemove array. This function will not take in nested arrays or arrays of objects.
const without = (source, itemsToRemove) => {
  let outputArray = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) outputArray.push(item);
  }
  return outputArray;
};

module.exports = without;