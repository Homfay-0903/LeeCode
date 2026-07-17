/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
    let curMin = nums[0]
    let minSum = nums[0]

    let curMax = nums[0]
    let maxSum = nums[0]

    let totalSum = nums[0]

    for (let i = 1; i < nums.length; i++) {
        totalSum += nums[i]

        curMin = Math.min(nums[i], curMin + nums[i])
        minSum = Math.min(minSum, curMin)

        curMax = Math.max(nums[i], curMax + nums[i])
        maxSum = Math.max(maxSum, curMax)
    }

    if (maxSum < 0) {
        return maxSum
    } else {
        return Math.max(maxSum, totalSum - minSum)
    }
};