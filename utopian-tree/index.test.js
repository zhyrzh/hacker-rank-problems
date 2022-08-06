const { utopianTree } = require("./index");

describe("Hacker Rank Problem: Utopian Tree", () => {
  it("Should return 1 with input 0", () => {
    expect(utopianTree(0)).toBe(1);
  });
  it("Should return 2 with input 1", () => {
    expect(utopianTree(1)).toBe(2);
  });
  it("Should return 7 with input 4", () => {
    expect(utopianTree(4)).toBe(7);
  });
  it("Should return 6 with input 3", () => {
    expect(utopianTree(3)).toBe(6);
  });
});
