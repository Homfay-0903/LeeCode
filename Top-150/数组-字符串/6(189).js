/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (!k) {
        return nums
    }

    k = k % nums.length

    const frontNums = nums.slice(0, nums.length - k)
    const backNums = nums.slice(nums.length - k)
    const ansNums = backNums.concat(frontNums)

    nums.splice(0, nums.length, ...ansNums)
};