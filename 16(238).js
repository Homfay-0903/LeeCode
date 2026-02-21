/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const len = nums.length
    const prefix = new Array(len)
    const subfix = new Array(len)
    const ans = new Array(len)

    prefix[0] = 1
    for (let i = 1; i < len; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1]
    }

    subfix[len - 1] = 1
    for (let i = len - 2; i >= 0; i--) {
        subfix[i] = subfix[i + 1] * nums[i + 1]
    }

    for (let i = 0; i < len; i++) {
        ans[i] = prefix[i] * subfix[i]
    }

    return ans
};