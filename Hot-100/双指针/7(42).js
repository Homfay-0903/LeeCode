/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let maxCapcity = 0
    let left = 0, right = height.length - 1
    let leftHeightest = 0, rightHeightest = 0

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] > leftHeightest) {
                leftHeightest = height[left]
            } else {
                maxCapcity += leftHeightest - height[left]
            }
            left++
        } else {
            if (height[right] > rightHeightest) {
                rightHeightest = height[right]
            } else {
                maxCapcity += rightHeightest - height[right]
            }
            right--
        }
    }

    return maxCapcity
};