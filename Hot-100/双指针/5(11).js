/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0, right = height.length - 1
    let maxArea = 0

    while (left < right) {
        const leftHeight = height[left]
        const rightHeight = height[right]
        const curHeight = leftHeight < rightHeight ? leftHeight : rightHeight
        const curWidth = right - left
        const curArea = curHeight * curWidth

        maxArea = Math.max(maxArea, curArea)

        if (leftHeight < rightHeight) {
            left++
        } else {
            right--
        }
    }

    return maxArea
};