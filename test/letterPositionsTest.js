const { assert } = require("chai");
const _ = require("../index");

const string = "HELLO and goodbye";

describe('#letterPositions', () => {
  it('should return [2, 3] for "L"', () => {
    assert.deepEqual(_.letterPositions(string)["L"], [2, 3]);
  });
  it('should return [5, 9] for " "', () => {
    assert.deepEqual(_.letterPositions(string)[" "], [5, 9]);
  });
  it('should return [8, 13] for "d"', () => {
    assert.deepEqual(_.letterPositions(string)["d"], [8, 13]);
  });
  it('should not return [4] for "O"', () => {
    assert.notDeepEqual(_.letterPositions(string)["O"], [5]);
  });
  it('should return undefined for "c"', () => {
    assert.deepEqual(_.letterPositions(string)["c"], undefined);
  })
});