// This function will take two objects (with nesting) and compares them and will return true or false based on if they are equal to eachother.
const eqObjects = (object1, object2) => {
  if (object1 === null || object2 === null) return false;
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let item in object1) {
    if (typeof object1[item] === 'object' && object1[item] !== null) {
      if (!eqObjects(object1[item], object2[item])) return false;
    } else if (object1[item] !== object2[item]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
