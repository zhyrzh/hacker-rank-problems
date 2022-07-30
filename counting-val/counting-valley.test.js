const countingValleys = require("./counting-valleys.solution");

describe("Hacker Rank Problem: Counting Valley", () => {
  it("Inputs: 8, UDDDUDUU", () => {
    const valleyCount = countingValleys(8, "UDDDUDUU");
    expect(valleyCount).toBe(1);
  });
  it("Inputs: 12, DDUUDDUDUUUD", () => {
    const valleyCount = countingValleys(12, "DDUUDDUDUUUD");
    expect(valleyCount).toBe(2);
  });
});
