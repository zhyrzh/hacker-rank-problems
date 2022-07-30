const getMoneySpent = require("./solution");

describe("Hacker Rank Problem: Electronic Shop", () => {
  it("Should equal to 9 with inputs [3, 1], [5, 2, 8] and 10", () => {
    let answer = getMoneySpent([3, 1], [5, 2, 8], 10);
    expect(answer).toBe(9);
  });

  it("Should equal to -1 with inputs [4], [5] and 5", () => {
    let answer = getMoneySpent([4], [5], 5);
    expect(answer).toBe(-1);
  });
});
