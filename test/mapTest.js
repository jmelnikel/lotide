const { assert } = require("chai");
const _ = require("../index");

const words = ["ground", "control", "to", "major", "tom"];

describe('#map', () => {
  it('should return ["g", "c", "t", "m", "t"] for word[0]', () => {
    assert.deepEqual(_.map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
  });
  it('should not return ["g", "C", "t", "m", "t"] for word[0]', () => {
    assert.notDeepEqual(_.map(words, word => word[0]), ["g", "C", "t", "m", "t"]);
  });
});