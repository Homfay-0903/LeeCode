/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const len = nums.length
    const queue = []
    const res = []

    for (let i = 0; i < len; i++) {
        if (queue.length > 0 && queue[0] <= i - k) {
            queue.shift()
        }

        while (queue.length > 0 && nums[i] > nums[queue[queue.length - 1]]) {
            queue.pop()
        }

        queue.push(i)

        if (i >= k - 1) {
            res.push(nums[queue[0]])
        }
    }

    return res
};