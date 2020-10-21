const { assert } = require("chai");
const _ = require("../index");

const object = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

describe('#findKey', () => {
  it('should return "noma" for 2 stars', () => {
    assert.strictEqual(_.findKey(object, x => x.stars === 2), "noma");
  });
  it('should not return "noma" for 3 stars', () => {
    assert.notStrictEqual(_.findKey(object, x => x.stars === 3), "noma");
  });
  it('should return undefined for 4 stars', () => {
    assert.strictEqual(_.findKey(object, x => x.stars === 4), undefined);
  });
});