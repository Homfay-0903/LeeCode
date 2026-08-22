/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length
    const prefix = new Array(n).fill(0)
    const subfix = new Array(n).fill(0)
    const res = []

    prefix[0] = 1
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1]
    }

    subfix[n - 1] = 1
    for (let i = n - 2; i >= 0; i--) {
        subfix[i] = subfix[i + 1] * nums[i + 1]
    }

    for (let i = 0; i < n; i++) {
        res[i] = prefix[i] * subfix[i]
    }

    return res
};