module.exports.cutTheSticks = (arr) => {
  let result = [];
  let condition = false;
  while (!condition) {
    if (arr.filter((item) => item !== 0).length !== 0) {
      result.push(arr.filter((item) => item !== 0).length);
    }
    condition = arr.every((item) => item === 0);
    let arrNoZero = arr.filter((item) => item !== 0);
    let minStick = Math.min(...arrNoZero);
    arr = arr.map((item) => {
      if (item !== 0) {
        return item - minStick;
      } else {
        return 0;
      }
    });
  }
  return result;
};
console.log(this.cutTheSticks([5, 4, 4, 2, 2, 8]));
