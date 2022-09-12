module.exports.sherlockAndSquares = function (a, b) {
  let perfectSquares = 0;
  let firstNum = Math.ceil(Math.sqrt(a));
  let lastNum = Math.floor(Math.sqrt(b));

  for (let i = firstNum; i <= lastNum; i++) {
    if (i * i >= a && i * i <= b) {
      perfectSquares += 1;
    }
  }

  return perfectSquares;
};
