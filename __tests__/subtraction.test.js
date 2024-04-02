const subtraction = require("../lib/subtraction.js");

describe("Subtraction Test", () => {
  test("Should subtract 3 minus 2 to equal 1", () => {
    expect(subtraction(3, 2)).toEqual(1);
  });
});

// ˇdescribe('Addition function', () => {
//   test('Should add 2 and 3 to equal 5', () => {
//     expect(addition(2,3)).toEqual(5);
//   });
// });
