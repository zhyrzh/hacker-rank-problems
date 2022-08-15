/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */
function beautifulDays(i, j, k) {
  let beautifulDaysCount = 0;
  for (let num = i; num <= j; num++) {
    let reversed = parseInt(
      (num + "")
        .split("")
        .reverse()
        .filter((n) => n !== 0)
        .join("")
    );
    if ((num - reversed) % k === 0) {
      beautifulDaysCount++;
    }
  }
  return beautifulDaysCount;
}

module.exports.beautifulDays = beautifulDays;
