/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const length = nums.length
    const prefix = new Array(length)
    const subfix = new Array(length)
    const answer = new Array(length)

    prefix[0] = 1
    for (let i = 1; i < length; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1]
    }

    subfix[length - 1] = 1
    for (let i = length - 2; i >= 0; i--) {
        subfix[i] = subfix[i + 1] * nums[i + 1]
    }

    for (i = 0; i < length; i++) {
        answer[i] = prefix[i] * subfix[i]
    }

    return answer
};