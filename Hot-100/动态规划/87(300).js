/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const n = nums.length
    const dp = new Array(n + 1).fill(1)
    let maxLen = 1

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            if (nums[j - 1] < nums[i - 1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }

        maxLen = Math.max(maxLen, dp[i])
    }

    return maxLen
};