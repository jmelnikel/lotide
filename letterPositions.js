// This function, when given a string, will return an object of the indexes of all the letters.
const letterPositions = (string) => {
  let output = {};
  for (let index = 0; index < string.length; index++) {
    if (output[string[index]] === undefined) {
      output[string[index]] = [index];
    } else {
      output[string[index]].push(index);
    }
  }
  return output;
};

module.exports = letterPositions;