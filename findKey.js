// This function takes an object and callback function. It will return the first key for which the callback fucnction returns a truthy value.
const findKey = (object, callback) => {
  for (let item in object) {
    if (callback(object[item])) return item;
  }
  return undefined;
};

module.exports = findKey;