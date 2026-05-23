/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    if (!nums.length) {
        return 0
    }

    let maxSoFar = nums[0]
    let minSoFar = nums[0]
    let result = nums[0]

    for (let i = 1; i < nums.length; i++) {
        const preMaxSoFar = maxSoFar
        const preMinSoFar = minSoFar

        maxSoFar = Math.max(nums[i], nums[i] * preMaxSoFar, nums[i] * preMinSoFar)
        minSoFar = Math.min(nums[i], nums[i] * preMaxSoFar, nums[i] * preMinSoFar)

        result = Math.max(result, maxSoFar)
    }

    return result
};