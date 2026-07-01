/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const numsMap = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (numsMap.has(nums[i])) {
            if (Math.abs(i - numsMap.get(nums[i])) <= k) {
                return true
            }
        }

        numsMap.set(nums[i], i)
    }

    return false
};