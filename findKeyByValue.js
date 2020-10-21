// This function,given an object and a value, will return the key of that given value from the object.
const findKeyByValue = (object, value) => {
  let key = undefined;
  for (let item in object) {
    if (object[item] === value) key = item;
  }
  return key;
};

module.exports = findKeyByValue;