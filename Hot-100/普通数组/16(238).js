/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const len = nums.length
    const prefixSum = new Array(len)
    const suffixSum = new Array(len)
    const res = new Array(len)

    prefixSum[0] = 1
    for (let i = 1; i < len; i++) {
        prefixSum[i] = prefixSum[i - 1] * nums[i - 1]
    }

    suffixSum[len - 1] = 1
    for (let i = len - 2; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] * nums[i + 1]
    }

    for (let i = 0; i < len; i++) {
        res[i] = prefixSum[i] * suffixSum[i]
    }

    return res
};