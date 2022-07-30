// A person wants to determine the most expensive computer keyboard
// and USB drive that can be purchased with a give budget. Given price
// lists for keyboards and USB drives and a budget, find the cost to buy
// them. If it is not possible to buy both items, return .
// const keyboards = [3, 1];
// const drives = [5, 2, 8];
// const budget = 10;

function getMoneySpent(keyboard, drives, b) {
  let currentHighest = 0;
  keyboard.forEach((kbPrice) => {
    for (let i = 0; i <= drives.length - 1; i++) {
      currentHighest =
        kbPrice + drives[i] > currentHighest && kbPrice + drives[i] <= b
          ? kbPrice + drives[i]
          : currentHighest;
    }
  });
  return currentHighest >= 1 ? currentHighest : -1;
}

module.exports = getMoneySpent;
