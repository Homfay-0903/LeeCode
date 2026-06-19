/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const sum = nums.reduce((acc, val) => (acc + val), 0)

    if (sum % 2) {
        return false
    }

    const target = sum / 2
    const dp = new Array(target + 1).fill(false)
    dp[0] = true

    for (const num of nums) {
        for (let j = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num]
        }

        if (dp[target]) {
            return true
        }
    }

    return false
};