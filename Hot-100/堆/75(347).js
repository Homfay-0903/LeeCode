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

    const bucket = new Array(nums.length + 1).fill(0).map(() => [])
    for (const [num, freq] of freqMap) {
        bucket[freq].push(num)
    }

    const res = []
    for (let i = bucket.length - 1; i >= 0 && res.length < k; i--) {
        if (bucket[i].length > 0) {
            res.push(...bucket[i])
        }
    }

    return res.slice(0, k)
};