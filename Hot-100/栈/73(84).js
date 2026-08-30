/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let maxArea = 0
    const newHeights = [0, ...heights, 0]
    const stack = []

    for (let i = 0; i < newHeights.length; i++) {
        while (stack.length > 0 && newHeights[i] < newHeights[stack[stack.length - 1]]) {
            const heightIdx = stack.pop()
            const height = newHeights[heightIdx]
            const width = i - stack[stack.length - 1] - 1
            maxArea = Math.max(maxArea, height * width)
        }
        stack.push(i)
    }

    return maxArea
};