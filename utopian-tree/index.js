/*
The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height 
increases by 1 meter. A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will 
the tree be after  growth cycles?
*/

/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */
function utopianTree(n) {
  // Write your code here
  let height = 0;
  for (let period = 0; period <= n; period++) {
    if (period % 2 === 0) {
      height += 1;
    } else {
      height *= 2;
    }
  }
  return height;
}

module.exports.utopianTree = utopianTree;
