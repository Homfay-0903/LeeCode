/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    if (!heights.length) {
        return 0
    }

    let maxArea = 0
    const stack = [0]
    const newHeights = [0, ...heights, 0]

    for (let i = 1; i < newHeights.length; i++) {
        while (newHeights[i] < newHeights[stack[stack.length - 1]]) {
            const topIndex = stack.pop()
            const height = newHeights[topIndex]
            const width = i - stack[stack.length - 1] - 1

            maxArea = Math.max(maxArea, height * width)
        }
        stack.push(i)

    }

    return maxArea
};