/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let slow = 1

    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast]
            slow++
        }
    }

    return slow
};