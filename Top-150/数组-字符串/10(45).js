/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let jumpCount = 0
    let curEnd = 0
    let nextEnd = 0

    for (let i = 0; i < nums.length - 1; i++) {
        nextEnd = Math.max(nextEnd, i + nums[i])

        if (i === curEnd) {
            jumpCount++
            curEnd = nextEnd
        }
    }

    return jumpCount
};