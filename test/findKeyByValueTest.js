const { assert } = require("chai");
const _ = require("../index");

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

describe('#findKeyByValue', () => {
  it('should return "drama" for "The Wire"', () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it('should not return "drama" for "Brooklyn Nine-Nine"', () => {
    assert.notStrictEqual(_.findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "drama");
  });
  it('should return undefined for "That 70s Show"', () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});