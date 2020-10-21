const { assert } = require("chai");
const _ = require("../index");

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

describe('#takeUntil', () => {
  it('should return [1, 2, 5, 7, 2] for x < 0', () => {
    assert.deepEqual(_.takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
  });
  it('should not return [1, 2, 5, 7, 2, -1] for x < 0', () => {
    assert.notDeepEqual(_.takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2, -1]);
  });
  it('should return ["I\'ve", "been", "to", "Hollywood"] for x === ","', () => {
    assert.deepEqual(_.takeUntil(data2, x => x === ","), ["I\'ve", "been", "to", "Hollywood"]);
  });
  it('should not return ["I\'ve", "been", "to"] for x === ","', () => {
    assert.notDeepEqual(_.takeUntil(data2, x => x === ","), ["I\'ve", "been", "to"]);
  });
});