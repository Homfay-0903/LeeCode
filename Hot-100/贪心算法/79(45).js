/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    const n = nums.length
    let jumps = 0
    let curEnd = 0, nextEnd = 0

    for (let i = 0; i < nums.length - 1; i++) {
        nextEnd = Math.max(nextEnd, i + nums[i])

        if (i === curEnd) {
            jumps++
            curEnd = nextEnd
        }
    }

    return jumps
};