/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    const n = nums.length
    let slow = 0, fast = 0

    while (fast < n) {
        if (nums[fast] !== 0) {
            [nums[fast], nums[slow]] = [nums[slow], nums[fast]]
            slow++
        }
        fast++
    }
};