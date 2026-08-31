/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const n = nums.length
    const dp = new Array(n + 1).fill(0)

    dp[1] = nums[0], dp[2] = Math.max(nums[0], nums[1])

    for (let i = 3; i <= n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
    }

    return dp[n]
};