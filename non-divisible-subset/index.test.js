const { nonDivisibleSubset } = require("./index");

describe("Hackerrank Problem: Non Divisible Subset", () => {
  it("Should return 3 with inputs: 4, [1, 7, 2, 4]", () => {
    expect(nonDivisibleSubset(4, [1, 7, 2, 4])).toBe(3);
  });
  it("Should return 11 with inputs: 7, [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]", () => {
    expect(
      nonDivisibleSubset(
        7,
        [
          278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575,
          436,
        ]
      )
    ).toBe(11);
  });
});
