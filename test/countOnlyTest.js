const { assert } = require("chai");
const _ = require("../index");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countOnly', () => {
  it('should return 1 for "Jason"', () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it('should return 0 for "Karima"', () => {
    assert.strictEqual(result1["Karima"], 0);
  });
  it('should return 2 for "Fang"', () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it('should return undefined for "Agouhanna"', () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});