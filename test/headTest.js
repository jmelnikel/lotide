const { assert } = require("chai");
const head = require("../head");

describe("#head", () => {
  it("should return 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it("should return [5, 6] for [[5, 6], 7, 8]", () => {
    assert.deepEqual(head([[5, 6], 7, 8]), [5, 6]);
  });
  it("should return 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
  it("should return 5 for [5]", () => {
    assert.strictEqual(head([5]), 5);
  });
  it("should return undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
  it("should not return 'hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.notStrictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'hello');
  });
  it("should not return 6 for [5, 6, 7]", () => {
    assert.notStrictEqual(head([5, 6, 7]), 6);
  });
});