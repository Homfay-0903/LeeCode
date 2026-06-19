/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const len = nums.length

    if (len === 1) {
        return nums[0]
    }

    const dp = new Array(len + 1).fill(0)
    dp[1] = nums[0]
    dp[2] = Math.max(nums[0], nums[1])

    for (let i = 3; i <= len; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
    }

    return dp[len]
};