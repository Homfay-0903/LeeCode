/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let slow = 0
    let fast = 0
    const len = nums.length

    for (; fast < len; fast++) {
        if (nums[fast] !== 0) {
            if (fast !== slow) {
                [nums[fast], nums[slow]] = [nums[slow], nums[fast]]
            }
            slow++
        }
    }

};