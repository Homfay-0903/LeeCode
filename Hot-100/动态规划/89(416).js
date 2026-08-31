/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const totalSum = nums.reduce((acc, val) => acc + val, 0)

    if (totalSum % 2) {
        return false
    }

    const target = totalSum / 2
    const dp = new Array(target + 1).fill(false)

    dp[0] = true

    for (const num of nums) {
        for (let i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num]
        }

        if (dp[target]) {
            return true
        }
    }

    return false
};