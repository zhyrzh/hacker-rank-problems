module.exports.findDigits = function (n) {
  let count = 0;
  for (let i = 0; i <= n.toString().length - 1; i++) {
    let num = parseInt(n.toString()[i]);
    if (num !== 0 && n % num === 0) {
      count++;
    }
  }
  return count;
};
