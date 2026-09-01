/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let left = 0, right = nums.length - 1
    let leftEnd = left, rightStart = right
    let pointer = left

    while (pointer <= rightStart) {
        if (nums[pointer] < 1) {
            [nums[pointer], nums[leftEnd]] = [nums[leftEnd], nums[pointer]]
            pointer++
            leftEnd++
        } else if (nums[pointer] === 1) {
            pointer++
        } else {
            [nums[pointer], nums[rightStart]] = [nums[rightStart], nums[pointer]]
            rightStart--
        }
    }
};