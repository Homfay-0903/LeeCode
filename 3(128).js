/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let longet = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let curNum = num;
      let curLen = 1;

      while (numSet.has(curNum + 1)) {
        curLen++;
        curNum++;
      }

      longet = Math.max(longet, curLen);
    }
  }

  return longet;
};
