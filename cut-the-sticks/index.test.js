const { cutTheSticks } = require("./index");
describe("Hacker Rank Problem: Cut the Sticks", () => {
  it("Should return [6, 4, 2, 1] with inputs: [5, 4, 4, 2, 2, 8]", () => {
    expect(cutTheSticks([5, 4, 4, 2, 2, 8])).toEqual([6, 4, 2, 1]);
  });
  it("Should return [1, 2, 3, 4, 3, 3, 2, 1] with inputs: [8, 6, 4, 1]", () => {
    expect(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1])).toEqual([8, 6, 4, 1]);
  });
});
