/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const prefixSumMap = new Map()
    prefixSumMap.set(0, 1)
    let prevSum = 0
    let count = 0

    for (const num of nums) {
        prevSum += num
        if (prefixSumMap.has(prevSum - k)) {
            count += prefixSumMap.get(prevSum - k)
        }

        prefixSumMap.set(prevSum, (prefixSumMap.get(prevSum) || 0) + 1)
    }

    return count
};