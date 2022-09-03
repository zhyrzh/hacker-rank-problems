const { findDigits } = require("./index");

describe("Hacker Rank Problem: Find Digits", () => {
  it("Should Return 2 with input: 12", () => {
    expect(findDigits(12)).toBe(2);
  });
  it("Should Return 3 with input: 1012", () => {
    expect(findDigits(1012)).toBe(3);
  });
});
