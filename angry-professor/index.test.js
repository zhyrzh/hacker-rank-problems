const { angryProfessor } = require("./index");

describe("Hacker Rank Problem: Angry Professor", () => {
  it('Should return "YES" with inputs: 3, [-1, -3, 4, 2]', () => {
    expect(angryProfessor(3, [-1, -3, 4, 2])).toEqual("YES");
  });
  it('Should return "NO" with inputs: 2, [0, -1, 2, 1]', () => {
    expect(angryProfessor(2, [0, -1, 2, 1])).toEqual("NO");
  });
});
