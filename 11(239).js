/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const deque = []
    const result = []

    for (let i = 0; i < nums.length; i++) {
        while (deque.length && nums[i] > nums[deque[deque.length - 1]]) {
            deque.pop()
        }

        deque.push(i)

        while (deque[0] < i - k + 1) {
            deque.shift()
        }

        if (i >= k - 1) {
            result.push(nums[deque[0]])
        }
    }

    return result
};