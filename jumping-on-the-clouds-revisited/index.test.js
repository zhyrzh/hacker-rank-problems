const { jumpingOnTheCloudsRevisited } = require("./index");

describe("Hacker Rank Problem: Jumping on the Clouds: Revisited", () => {
  it("Should return 92 with inputs: ([0, 0, 1, 0, 0, 1, 1, 0], 2)", () => {
    expect(jumpingOnTheCloudsRevisited([0, 0, 1, 0, 0, 1, 1, 0], 2)).toBe(92);
  });
});
