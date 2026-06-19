/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map()
    const len = nums.length

    for (let i = 0; i < len; i++) {
        const complement = target - nums[i]

        if (map.has(complement)) {
            return [i, map.get(complement)]
        }

        map.set(nums[i], i)
    }

    return []
};