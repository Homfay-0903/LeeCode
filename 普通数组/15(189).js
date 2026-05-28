/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (!k) {
        return
    }

    const len = nums.length
    k = k % len
    const frontNums = nums.slice(0, len - k)
    const backNums = nums.slice(len - k)
    const newNums = backNums.concat(frontNums)

    //for (let i = 0; i < len; i++) {
    //    nums[i] = newNums[i]
    //}
    nums.splice(0, len, ...newNums)
};