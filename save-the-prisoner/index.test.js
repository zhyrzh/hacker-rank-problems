const saveThePrisoner = require("./index");

describe("Hacker Rank Problem: Save The Prisoner!", () => {
  it("Should return 2 with inputs: (5, 2, 1)", () => {
    expect(saveThePrisoner(5, 2, 1)).toEqual(2);
  });
  it("Should return 3 with inputs: (5, 2, 2)", () => {
    expect(saveThePrisoner(5, 2, 2)).toEqual(3);
  });
  it("Should return 6 with inputs: (7, 19, 2)", () => {
    expect(saveThePrisoner(7, 19, 2)).toEqual(6);
  });
  it("Should return 3 with inputs: (3, 7, 3)", () => {
    expect(saveThePrisoner(3, 7, 3)).toEqual(3);
  });
});
