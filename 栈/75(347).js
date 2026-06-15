/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const freqMap = new Map()
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }

    const bucketArr = new Array(nums.length + 1).fill(null).map(() => [])
    for ([num, count] of freqMap) {
        bucketArr[count].push(num)
    }

    const res = []
    for (let i = bucketArr.length - 1; i >= 0 && res.length < k; i--) {
        if (bucketArr[i]) {
            res.push(...bucketArr[i])
        }
    }

    return res.slice(0, k)
};