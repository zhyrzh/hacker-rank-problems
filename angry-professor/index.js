/*

A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, 
the professor decides to cancel class if fewer than some number of students are present when class 
starts. Arrival times go from on time arrivalTime <= 0 to arrived late arrivalTime > 0


*/

/*
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

function angryProfessor(k, a) {
  // Write your code here
  const arrived = a.filter((student) => student <= 0);
  return k > arrived.length ? "YES" : "NO";
}

module.exports.angryProfessor = angryProfessor;
