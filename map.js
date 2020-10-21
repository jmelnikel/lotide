// This function will take in an array and a callback function to act on that array. It will then return the affected array.
const map = (array, callback) => {
  const output = [];
  for (let item of array) {
    output.push(callback(item));
  }
  return output;
};

module.exports = map;