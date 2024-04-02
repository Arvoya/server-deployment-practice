const subtraction = require("../lib/subtraction.js");

describe("Subtraction Test", () => {
  test("Should subtract 3 minus 2 to equal 1", () => {
    expect(subtraction(3, 2)).toEqual(1);
  });
});
