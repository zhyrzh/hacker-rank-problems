const { catsAndMouse } = require("./solution");

describe("Hacker Rank Problem: Cats and Mouse", () => {
  it("Should equal to Cat B", () => {
    let res = catsAndMouse(1, 2, 3);
    expect(res).toBe("Cat B");
  });
  it("Should equal to Mouse C", () => {
    let res = catsAndMouse(1, 3, 2);
    expect(res).toBe("Mouse C");
  });
});
