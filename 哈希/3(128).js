/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const len = nums.length
    if (!len) {
        return 0
    }

    let maxLen = 1
    let curLen = 1

    nums.sort((a, b) => a - b)

    for (let i = 1; i < len; i++) {
        if (nums[i] === nums[i - 1]) {
            continue
        } else if (nums[i] - nums[i - 1] === 1) {
            curLen++
            maxLen = Math.max(maxLen, curLen)
        } else {
            curLen = 1
        }
    }

    return maxLen
};


var longestConsecutive = function (nums) {
    const set = new Set(nums)
    let maxLen = 0

    for (const num of set) {
        if (!set.has(num - 1)) {
            let curNum = num
            let curLen = 1

            while (set.has(curNum + 1)) {
                curNum++
                curLen++
            }

            maxLen = Math.max(maxLen, curLen)
        }
    }

    return maxLen
};