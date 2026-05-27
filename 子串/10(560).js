/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const prefixMap = new Map()
    prefixMap.set(0, 1)

    let curSum = 0
    let count = 0

    for (const num of nums) {
        curSum += num

        if (prefixMap.has(curSum - k)) {
            count += prefixMap.get(curSum - k)
        }

        prefixMap.set(curSum, (prefixMap.get(curSum) || 0) + 1)
    }

    return count
};