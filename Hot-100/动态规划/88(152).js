/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    const n = nums.length
    let minSoFar = nums[0]
    let maxSoFar = nums[0]
    let maxRes = nums[0]

    for (let i = 1; i < n; i++) {
        let preMinSoFar = minSoFar
        let preMaxSoFar = maxSoFar

        minSoFar = Math.min(preMinSoFar * nums[i], preMaxSoFar * nums[i], nums[i])
        maxSoFar = Math.max(preMaxSoFar * nums[i], preMinSoFar * nums[i], nums[i])

        maxRes = Math.max(maxRes, maxSoFar)
    }

    return maxRes
};