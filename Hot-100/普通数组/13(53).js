/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (!nums.length) {
        return 0
    }

    const len = nums.length
    let curSum = nums[0]
    let maxSum = nums[0]

    for (let i = 1; i < len; i++) {
        curSum = Math.max(nums[i], curSum + nums[i])
        maxSum = Math.max(maxSum, curSum)
    }

    return maxSum
};