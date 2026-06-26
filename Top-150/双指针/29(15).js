/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const len = nums.length
    const res = []

    nums.sort((a, b) => a - b)

    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) {
            break
        }

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        let left = i + 1, right = len - 1

        while (left < right) {
            const curSum = nums[i] + nums[left] + nums[right]

            if (!curSum) {
                res.push([nums[i], nums[left], nums[right]])

                left++
                right--

                while (left < right && nums[left] === nums[left - 1]) {
                    left++
                }
                while (left < right && nums[right] === nums[right + 1]) {
                    right--
                }
            } else if (curSum < 0) {
                left++
            } else {
                right--
            }
        }
    }

    return res
};