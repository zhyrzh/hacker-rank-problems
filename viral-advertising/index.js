/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

module.exports.viralAdvertising = function viralAdvertising(n) {
  let totalLikes = 0;
  let dayCount = 1;
  let numberOfPeople = 5;
  while (n >= dayCount) {
    dayCount++;
    totalLikes = totalLikes + Math.floor(numberOfPeople / 2);
    numberOfPeople = Math.floor(numberOfPeople / 2) * 3;
  }
  return totalLikes;
};
