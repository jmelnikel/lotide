// This function will take in a string and count the occurance of each letter as an object.
const countLetters = string => {
  let output = {};
  for (let letter of string) {
    if (output[letter] === undefined) {
      output[letter] = 1;
    } else {
      output[letter] += 1;
    }
  }
  return output;
};

module.exports = countLetters;