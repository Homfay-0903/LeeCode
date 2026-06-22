/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const n = height.length

    let left = 0, right = n - 1
    let leftHighest = 0, rightHighest = 0
    let res = 0

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] > leftHighest) {
                leftHighest = height[left]
            } else {
                res += leftHighest - height[left]
            }

            left++
        } else {
            if (height[right] > rightHighest) {
                rightHighest = height[right]
            } else {
                res += rightHighest - height[right]
            }

            right--
        }
    }

    return res
};