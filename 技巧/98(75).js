/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let left = 0, right = nums.length - 1
    let point = 0

    while (point <= right) {
        if (nums[point] < 1) {
            [nums[point], nums[left]] = [nums[left], nums[point]]
            left++
            point++
        } else if (nums[point] === 1) {
            point++
        } else {
            [nums[point], nums[right]] = [nums[right], nums[point]]
            right--
        }
    }
};