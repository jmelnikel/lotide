// This function takes in an array of arrays and returns a one-level array with all the elements. This function only handles one level of nesting.
const flatten = (arrayOfArrays) => {
  let output = [];
  for (let item of arrayOfArrays) {
    if (!Array.isArray(item)) {
      output.push(item);
    } else {
      output = output.concat(item);
    }
  }
  return output;
};

module.exports = flatten;
