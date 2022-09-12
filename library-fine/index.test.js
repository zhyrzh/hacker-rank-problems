const { libraryFine } = require("./index");
describe("Hacker Rank Problem: Library Fine", () => {
  it("Should return 45 with inputs: (9, 6, 2015, 6, 6, 2015)", () => {
    expect(libraryFine(9, 6, 2015, 6, 6, 2015)).toEqual(45);
  });
});
