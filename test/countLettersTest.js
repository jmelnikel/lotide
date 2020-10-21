const { assert } = require("chai");
const _ = require("../index");

const string = "UPPERCASE and lowercase";

describe('#countLetters', () => {
  it('should return 2 for "a"', () => {
    assert.strictEqual(_.countLetters(string)["a"], 2);
  });
  it('should return 1 for "A"', () => {
    assert.strictEqual(_.countLetters(string)["A"], 1);
  });
  it('should return undefined for "p"', () => {
    assert.strictEqual(_.countLetters(string)["p"], undefined);
  });
  it('should return 2 for "P"', () => {
    assert.strictEqual(_.countLetters(string)["P"], 2);
  });
  it('should return 2 for " "', () => {
    assert.strictEqual(_.countLetters(string)[" "], 2);
  });
});