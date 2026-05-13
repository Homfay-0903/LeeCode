/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    if (nums.length === 1) {
        return 0
    }

    let curEnd = 0
    let nextMaxEnd = 0
    let jumps = 0

    for (let i = 0; i < nums.length - 1; i++) {
        nextMaxEnd = Math.max(nextMaxEnd, nums[i] + i)

        if (i === curEnd) {
            jumps++
            curEnd = nextMaxEnd
        }
    }

    return jumps
};