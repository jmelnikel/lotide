const { assert } = require("chai");
const _ = require("../index");

describe("#head", () => {
  it("should return 5 for [5, 6, 7]", () => {
    assert.strictEqual(_.head([5, 6, 7]), 5);
  });
  it("should return [5, 6] for [[5, 6], 7, 8]", () => {
    assert.deepEqual(_.head([[5, 6], 7, 8]), [5, 6]);
  });
  it("should return 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(_.head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
  it("should return 5 for [5]", () => {
    assert.strictEqual(_.head([5]), 5);
  });
  it("should return undefined for []", () => {
    assert.strictEqual(_.head([]), undefined);
  });
  it("should not return 'hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.notStrictEqual(_.head(['Hello', 'Lighthouse', 'Labs']), 'hello');
  });
  it("should not return 6 for [5, 6, 7]", () => {
    assert.notStrictEqual(_.head([5, 6, 7]), 6);
  });
});