/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const len = nums.length
    const numMap = new Map()

    for (const num of nums) {
        numMap.set(num, (numMap.get(num) || 0) + 1)

        if (numMap.get(num) > (len / 2)) {
            return num
        }
    }
};