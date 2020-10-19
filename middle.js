// This function will take an array and return an array with the middle element or elements if the middle falls between two items.
const middle = array => {
  const length = array.length;
  if (length < 3) {
    return [];
  }

  const middleIndexToUse = Math.ceil(length / 2) - 1;
  let output = [];
  if (length % 2 === 0) {
    output.push(array[middleIndexToUse]);
    output.push(array[middleIndexToUse + 1]);
  } else {
    output.push(array[middleIndexToUse]);
  }
  return output;
};

module.exports = middle;