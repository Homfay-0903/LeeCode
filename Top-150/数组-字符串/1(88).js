/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    const newNums1 = nums1.slice(0, m)
    const resNums = newNums1.concat(nums2)
    resNums.sort((a, b) => a - b)

    for (let i = 0; i < m + n; i++) {
        nums1[i] = resNums[i]
    }
};