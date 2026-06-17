/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    const len = nums.length

    let maxSumSoFar = nums[0]
    let minSumSoFar = nums[0]
    let result = nums[0]

    for (let i = 1; i < len; i++) {
        let preMaxSum = maxSumSoFar
        let preminSum = minSumSoFar

        maxSumSoFar = Math.max(nums[i], nums[i] * preMaxSum, nums[i] * preminSum)
        minSumSoFar = Math.min(nums[i], nums[i] * preMaxSum, nums[i] * preminSum)

        result = Math.max(result, maxSumSoFar)
    }

    return result
};