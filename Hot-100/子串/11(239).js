/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const n = nums.length
    const queue = []
    const res = []

    for (let i = 0; i < n; i++) {
        while (queue.length > 0 && queue[0] < i + 1 - k) {
            queue.shift()
        }

        while (queue.length > 0 && nums[i] > nums[queue[queue.length - 1]]) {
            queue.pop()
        }

        queue.push(i)

        if (i + 1 - k >= 0) {
            res.push(nums[queue[0]])
        }
    }

    return res
};