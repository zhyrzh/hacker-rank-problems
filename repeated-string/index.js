module.exports.repeatedString = function (s, n) {
  let regEx = /a/g;
  let matched = s.match(regEx);
  if (!matched) return 0;
  let res = 0;
  let perfectTimes = Math.floor(n / s.length);
  res = res + perfectTimes * matched.length;
  if (n % s.length !== 0) {
    console.log(n - perfectTimes);
    let strLeftLength = s.substring(0, n % s.length).match(/a/g);
    res += strLeftLength ? strLeftLength.length : 0;
  }
  return res;
};
