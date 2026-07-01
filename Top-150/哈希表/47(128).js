/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const numsSet = new Set(nums)

    let len = 0

    for (const num of numsSet) {
        if (!numsSet.has(num - 1)) {
            let curLen = 1
            let curNum = num

            while (numsSet.has(curNum + 1)) {
                curLen++
                curNum++
            }

            len = Math.max(len, curLen)
        }
    }

    return len
};