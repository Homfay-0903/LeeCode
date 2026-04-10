/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const n1 = nums1.length
    const n2 = nums2.length
    const k1 = Math.floor((n1 + n2 + 1) / 2)
    const k2 = Math.floor((n1 + n2 + 2) / 2)

    const findKth = (arr1, arr2, k) => {
        if (!arr1.length) {
            return arr2[k - 1]
        }
        if (!arr2.length) {
            return arr1[k - 1]
        }
        if (k === 1) {
            return Math.min(arr1[0], arr2[0])
        }

        const i = Math.min(Math.floor(k / 2), arr1.length) - 1
        const j = Math.min(Math.floor(k / 2), arr2.length) - 1

        if (arr1[i] <= arr2[j]) {
            return findKth(arr1.slice(i + 1), arr2, k - (i + 1))
        } else {
            return findKth(arr1, arr2.slice(j + 1), k - (j + 1))
        }
    }

    return (findKth(nums1, nums2, k1) + findKth(nums1, nums2, k2)) / 2
};