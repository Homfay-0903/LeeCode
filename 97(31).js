/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let flag = nums.length - 2

    while (flag >= 0 && nums[flag] >= nums[flag + 1]) {
        flag--
    }

    if (flag >= 0) {
        let swap = nums.length - 1

        while (swap > flag && nums[swap] <= nums[flag]) {
            swap--
        }

        [nums[swap], nums[flag]] = [nums[flag], nums[swap]]
    }

    let start = flag + 1
    let end = nums.length - 1
    let swapCount = Math.floor((end - start + 1) / 2)
    while (swapCount) {
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++
        end--
        swapCount--
    }
};