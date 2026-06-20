/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let maxReach = nums[0]

    for (let i = 1; i < nums.length; i++) {
        if (maxReach >= i) {
            const curReach = i + nums[i]
            maxReach = Math.max(maxReach, curReach)
        } else {
            return false
        }
    }

    return maxReach >= nums.length - 1
};