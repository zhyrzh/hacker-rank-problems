const { repeatedString } = require("./index");
describe("Hackerrank Problem: Repeated string", () => {
  it("Should return 7 with inputs: (aba, 10)", () => {
    expect(repeatedString("aba", 10)).toEqual(7);
  });
  it("Should return 7 with inputs: (aba, 10)", () => {
    expect(repeatedString("a", 1000000000000)).toEqual(1000000000000);
  });
});
