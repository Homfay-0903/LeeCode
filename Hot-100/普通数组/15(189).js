/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (k === 0) {
        return
    }

    k = k % nums.length
    const backNums = nums.slice(nums.length - k)
    const frontNums = nums.slice(0, nums.length - k)
    const newNums = backNums.concat(frontNums)
    nums.splice(0, nums.length, ...newNums)
};