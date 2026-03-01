/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const len = nums.length

    for (let i = 0; i < len; i++) {
        while (nums[i] > 0 && nums[i] <= len && nums[i] !== nums[nums[i] - 1]) {
            //[nums[i], nums[nums[i] - 1]] = [nums[nums[i] - 1], nums[i]]
            const targetIndex = nums[i] - 1;
            const temp = nums[i];
            nums[i] = nums[targetIndex];
            nums[targetIndex] = temp;
        }
    }

    for (let i = 0; i < len; i++) {
        if (nums[i] !== i + 1) {
            return i + 1
        }
    }

    return len + 1
};