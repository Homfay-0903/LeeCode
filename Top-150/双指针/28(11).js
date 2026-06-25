/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    const len = height.length

    let left = 0, right = len - 1
    let maxArea = 0

    while (left < right) {
        const leftHeight = height[left]
        const rightHeight = height[right]
        const curHeight = Math.min(leftHeight, rightHeight)
        const curWidth = right - left

        maxArea = Math.max(maxArea, curHeight * curWidth)

        if (leftHeight < rightHeight) {
            left++
        } else {
            right--
        }
    }

    return maxArea
};