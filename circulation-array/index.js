function circularArrayRotation(a, k, q) {
  // Write your code here
  // temp = 2
  // 1 2 3 -> 3 2 3 -> 3 1 3 -> 3 1 2

  //   while (k >= 1) {
  //     let temp = a[a.length - 1];
  //     for (let i = 0; i <= a.length - 1; i++) {
  //       let curr = a[i];
  //       a[i] = temp;
  //       temp = curr;
  //     }
  //     k--;
  //   }

  let rotated = [];
  let idx;
  for (let i = 0; i <= a.length - 1; i++) {
    idx = (i + k + 1) % a.length;
    idx = idx === 0 ? a.length - 1 : idx - 1;
    rotated[idx] = a[i];
  }

  return q.map((qry) => rotated[qry]);
}

module.exports = circularArrayRotation;
