// This function takes in an array and callback function. It will return a portion from the array starting from the begining until a specified element via the callback function.
const takeUntil = (array, callback) => {
  let output = [];
  for (let element of array) {
    if (callback(element)) {
      return output;
    } else {
      output.push(element);
    }
  }
};

module.exports = takeUntil;