/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const n = nums.length

    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] !== nums[nums[i] - 1]) {
            const targetIdx = nums[i] - 1
            const temp = nums[i]
            nums[i] = nums[targetIdx]
            nums[targetIdx] = temp
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1
        }
    }

    return n + 1
};