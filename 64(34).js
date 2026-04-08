/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    let leftIdx = -1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (nums[mid] === target) {
            leftIdx = mid
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    left = 0
    right = nums.length - 1
    let rightIdx = -1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (nums[mid] === target) {
            rightIdx = mid
            left = mid + 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return [leftIdx, rightIdx]
};