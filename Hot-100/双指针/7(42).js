/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = 0
    let right = height.length - 1
    let leftHighest = 0
    let rightHighest = 0
    let res = 0

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftHighest) {
                leftHighest = height[left]
            } else {
                res += leftHighest - height[left]
            }
            left++
        } else {
            if (height[right] >= rightHighest) {
                rightHighest = height[right]
            } else {
                res += rightHighest - height[right]
            }
            right--
        }
    }

    return res
};