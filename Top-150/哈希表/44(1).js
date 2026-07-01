/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numsMap = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (numsMap.has(target - nums[i])) {
            return [i, numsMap.get(target - nums[i])]
        } else {
            numsMap.set(nums[i], i)
        }
    }
};