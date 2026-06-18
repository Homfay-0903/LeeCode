/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    const len = nums.length
    let point = len - 2

    while (point >= 0 && nums[point] >= nums[point + 1]) {
        point--
    }

    if (point >= 0) {
        let swap = len - 1

        while (swap > point && nums[swap] <= nums[point]) {
            swap--
        }

        [nums[swap], nums[point]] = [nums[point], nums[swap]]
    }

    let start = point + 1
    let end = len - 1
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++
        end--
    }
};