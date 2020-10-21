const { assert } = require("chai");
const _ = require("../index");

describe('#tail', () => {
  it("should return 2 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(_.tail(['Yo Yo', 'Lighthouse', 'Labs']).length, 2);
  });
  it("should return 'Lighthouse' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(_.tail(['Yo Yo', 'Lighthouse', 'Labs'])[0], 'Lighthouse');
  });
  it("should return 'Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(_.tail(['Yo Yo', 'Lighthouse', 'Labs'])[1], 'Labs');
  });
  it("should not return 'Yo Yo' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.notStrictEqual(_.tail(['Yo Yo', 'Lighthouse', 'Labs'])[0], 'Yo Yo');
  });
});