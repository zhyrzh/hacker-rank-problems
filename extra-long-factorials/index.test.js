const { extraLongFactorial } = require("./index");
describe("Hacker Rank Problem: Extra Long Factorials", () => {
  it("Should Equal to 15511210043330985984000000 with input: 25", () => {
    expect(extraLongFactorial(25)).toEqual("15511210043330985984000000");
  });
});
