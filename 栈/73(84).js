/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let maxArea = 0

    const newHeights = [0, ...heights, 0]
    const heightsStack = [0]

    for (let i = 0; i < newHeights.length; i++) {
        while (newHeights[i] < newHeights[heightsStack[heightsStack.length - 1]]) {
            const lastIndex = heightsStack.pop()
            const height = newHeights[lastIndex]
            const width = i - heightsStack[heightsStack.length - 1] - 1

            maxArea = Math.max(maxArea, height * width)
        }

        heightsStack.push(i)
    }

    return maxArea
};