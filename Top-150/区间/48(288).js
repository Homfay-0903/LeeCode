/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    const len = nums.length
    const res = []

    if (!len) {
        return res
    }

    let startNum = nums[0], endNum = nums[0]

    for (let i = 1; i < len; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            endNum = nums[i]
        } else {
            if (startNum === endNum) {
                res.push(String(startNum))
            } else {
                res.push(`${startNum}->${endNum}`)

            }

            startNum = nums[i]
            endNum = nums[i]
        }
    }

    if (startNum === endNum) {
        res.push(String(startNum))
    } else {
        res.push(`${startNum}->${endNum}`)

    }

    return res
};