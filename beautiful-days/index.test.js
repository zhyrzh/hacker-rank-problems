const { beautifulDays } = require("./index");

describe("Hacker Rank Problem: Beautiful Days", () => {
  it("Should Equal to 2 with inputs: (20, 23, 6)", () => {
    expect(beautifulDays(20, 23, 6)).toEqual(2);
  });
  it("Should Equal to 33 with inputs: (13, 45, 3)", () => {
    expect(beautifulDays(13, 45, 3)).toEqual(33);
  });
});
