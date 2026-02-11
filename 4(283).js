/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let nonZeroIndex = 0
    let len = nums.length

    for (let i = 0; i < len; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i]
            nonZeroIndex++
        }
    }

    for (let i = nonZeroIndex; i < len; i++) {
        nums[i] = 0
    }
};
