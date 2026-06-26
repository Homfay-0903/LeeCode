/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    const len = nums.length

    let left = 0
    let sum = 0
    let minLen = Infinity

    for (let right = 0; right < len; right++) {
        sum += nums[right]

        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1)
            sum -= nums[left]
            left++
        }
    }

    return minLen === Infinity ? 0 : minLen
};