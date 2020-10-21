const { assert } = require("chai");
const _ = require("../index");

const words = ["dog", "cat", "mouse", "chicken"];
const numbers = [2, 5, -4, 23, 63];

describe('#without', () => {
  it('should return ["dog", "mouse", "chicken"] given ["cat"]', () => {
    assert.deepEqual(_.without(words, ["cat"]), ["dog", "mouse", "chicken"]);
  });
  it('should return [5, -4, 63] given [23, 2]', () => {
    assert.deepEqual(_.without(numbers, [23, 2]), [5, -4, 63]);
  });
  it('should return [] given [2, 5, -4, 23, 63]', () => {
    assert.deepEqual(_.without(numbers, [2, 5, -4, 23, 63]), []);
  });
  it('should return [2, 5, -4, 23, 63] given []', () => {
    assert.deepEqual(_.without(numbers, []), [2, 5, -4, 23, 63]);
  });
});
