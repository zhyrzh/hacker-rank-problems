const { sherlockAndSquares } = require("./index");
describe("Hacker Rank Problem: Sherlock and Squares", () => {
  it("Should return 3 with inputs, (24, 49)", () => {
    expect(sherlockAndSquares(24, 49)).toEqual(3);
  });
  it("Should return 2 with inputs, (3, 9)", () => {
    expect(sherlockAndSquares(3, 9)).toEqual(2);
  });
  it("Should return 0 with inputs, (17, 24)", () => {
    expect(sherlockAndSquares(17, 24)).toEqual(0);
  });
  it("Should return 3 with inputs, (35, 70)", () => {
    expect(sherlockAndSquares(35, 70)).toEqual(3);
  });
  it("Should return 22 with inputs, (100, 1000)", () => {
    expect(sherlockAndSquares(100, 1000)).toBe(22);
  });
});
