/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const freqMap = new Map()

    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }

    for ([num, count] of freqMap) {
        if (count === 1) {
            return num
        }
    }
};