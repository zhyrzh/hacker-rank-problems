const { viralAdvertising } = require("./index");
describe("Hacker Rank Problem: Viral Advertising", () => {
  it("Should return 9 with input: 3", () => {
    expect(viralAdvertising(3)).toEqual(9);
  });
  it("Should return 15 with input: 4", () => {
    expect(viralAdvertising(4)).toEqual(15);
  });
});
