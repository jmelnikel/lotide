const assert = require("chai").assert;
const tail = require("../tail");

describe('#tail', () => {
  it("should return 2 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']).length, 2);
  });
  it("should return 'Lighthouse' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(['Yo Yo', 'Lighthouse', 'Labs'])[0], 'Lighthouse');
  });
  it("should return 'Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(['Yo Yo', 'Lighthouse', 'Labs'])[1], 'Labs');
  });
  it("should not return 'Yo Yo' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.notStrictEqual(tail(['Yo Yo', 'Lighthouse', 'Labs'])[0], 'Yo Yo');
  });
})