const { appendAndDelete } = require("./index");

describe("Hacker Rank Problem: Append and Delete", () => {
  it("should return YES with inputs: (hackerhappy, hackerrank, 9)", () => {
    expect(appendAndDelete("hackerhappy", "hackerrank", 9)).toBe("Yes");
  });
  it("should return YES with inputs: (aba, aba, 7)", () => {
    expect(appendAndDelete("aba", "aba", 7)).toBe("Yes");
  });
  it("should return No with inputs: (ashley, ash, 2)", () => {
    expect(appendAndDelete("ashley", "ash", 2)).toBe("No");
  });
});
