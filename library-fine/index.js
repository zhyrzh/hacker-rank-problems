module.exports.libraryFine = function (d1, m1, y1, d2, m2, y2) {
  let fine = 0;
  if (d1 > d2 && m1 === m2 && y2 === y1) {
    fine = (d1 - d2) * 15;
  }
  if (m1 > m2 && y2 === y1) {
    fine = (d1 - d2) * 500;
  }
  if (y1 > y2) {
    fine = 10000;
  }
  return fine;
};
