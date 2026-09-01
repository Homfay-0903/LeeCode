/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    const n = nums.length
    let pointer = n - 2

    while (pointer >= 0 && nums[pointer] >= nums[pointer + 1]) {
        pointer--
    }

    if (pointer >= 0) {
        let swap = n - 1

        while (swap > pointer && nums[swap] <= nums[pointer]) {
            swap--
        }

        [nums[swap], nums[pointer]] = [nums[pointer], nums[swap]]
    }

    let left = pointer + 1
    let right = n - 1

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++, right--
    }
};