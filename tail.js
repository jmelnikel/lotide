// This function will take the tail of an array (everything except the first element) and return a new array of those elements.
const tail = array => {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

module.exports = tail;