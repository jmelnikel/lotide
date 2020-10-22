const { assert } = require("chai");
const _ = require("../index");

const object1 = { a: "1", b: "2" };
const object2 = { b: "2", a: "1" };
const object3 = { a: "1", b: "2", c: "3" };

describe('#eqObjects', () => {
  it('should return true for { a: "1", b: "2" } compared to { b: "2", a: "1" }', () => {
    assert.isTrue(_.eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }));
  });
  it('should return false for { a: "1", b: "2" } compared to { a: "1", b: "2", c: "3" }', () => {
    assert.isFalse(_.eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }));
  });
  it('should return true for { a: { z: 1 }, b: 2 } compared to { a: { z: 1 }, b: 2 }', () => {
    assert.isTrue(_.eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it('should return false for { a: { y: 0, z: 1 }, b: 2 } compared to { a: { z: 1 }, b: 2 }', () => {
    assert.isFalse(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it('should return false for { a: { y: 0, z: 1 }, b: 2 } compared to { a: 1, b: 2 }', () => {
    assert.isFalse(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });
  it('should return false for { a: { y: null, z: 1 }, b: 2 } compared to { a: 1, b: 2 }', () => {
    assert.isFalse(_.eqObjects({ a: { y: null, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });
});