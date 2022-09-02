module.exports.jumpingOnTheCloudsRevisited = function (clouds, jumpCount) {
  let totalEnergy = 100;
  let index = 0;
  while (true) {
    index += jumpCount;
    index = index % clouds.length;
    if (clouds[index] === 1) totalEnergy -= 2;
    totalEnergy -= 1;
    if (index === 0) break;
  }
  return totalEnergy;
};
