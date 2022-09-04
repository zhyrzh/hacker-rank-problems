module.exports.extraLongFactorial = function (n) {
  n = BigInt(n);
  let result = BigInt(1);
  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  return result.toString();
};
