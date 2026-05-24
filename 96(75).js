/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let left = 0
    let right = nums.length - 1
    let flag = 0

    while (flag <= right) {
        if (nums[flag] === 0) {
            [nums[flag], nums[left]] = [nums[left], nums[flag]]
            flag++
            left++
        } else if (nums[flag] === 1) {
            flag++
        } else {
            [nums[flag], nums[right]] = [nums[right], nums[flag]]
            right--
        }
    }
};