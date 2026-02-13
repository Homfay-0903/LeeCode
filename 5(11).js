/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0
    let right = height.length - 1
    let maxArea = 0

    while (left < right) {
        let minHeight = Math.min(height[left], height[right])
        let bottomWidth = right - left
        let curArea = minHeight * bottomWidth

        maxArea = Math.max(curArea, maxArea)
    }

    return maxArea
};