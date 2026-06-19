/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    const len = nums.length

    if (len === 1) {
        return 0
    }

    let jump = 0
    let curEnd = 0
    let nextMaxEnd = 0

    for (let i = 0; i < len - 1; i++) {
        nextMaxEnd = Math.max(nextMaxEnd, nums[i] + i)

        if (i === curEnd) {
            jump++
            curEnd = nextMaxEnd
        }
    }

    return jump
};