/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    const length = nums.length
    let maxReach = 0

    for (let i = 0; i < length; i++) {
        if (i > maxReach) {
            return false
        }

        maxReach = Math.max(maxReach, nums[i] + i)
        if (maxReach >= length - 1) {
            return true
        }
    }
};