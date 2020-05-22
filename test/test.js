var assert = require("assert");
const getOutput = require("../utils/getOutout");

describe("Apply set of instructions", function () {
  it("if only apply instruction", function () {
    assert.equal(getOutput("apply 1"), 1);
  });
  it("normal instructions apply, \nadd 2\nmultiply 3\napply 3", function () {
    assert.equal(getOutput("add 2\nmultiply 3\napply 3"), 15);
  });
  it("Instructions with invalid instruction type, \ncast 2\nmultiply 3\napply 3", function () {
    assert.equal(getOutput("cast 2\nmultiply 3\napply 3"), false);
  });
  it("Instructions with invalid data,\nadd 2a\nmultiply 3\napply 3", function () {
    assert.equal(getOutput("add 2a\nmultiply 3\napply 3"), false);
  });
  it("Instructions with valid data,\nmultiply 9\napply 5", function () {
    assert.equal(getOutput("multiply 9\napply 5"), 45);
  });
});
