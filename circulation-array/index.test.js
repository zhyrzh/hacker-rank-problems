const circularArrayRotation = require("./index");

describe("Hacker Rank Problem: Circulation Array", () => {
  it("should return [2, 3, 1] with inputs: ([1, 2, 3], 2, [0, 1, 2])", () => {
    expect(circularArrayRotation([1, 2, 3], 2, [0, 1, 2])).toEqual([2, 3, 1]);
  });
});
