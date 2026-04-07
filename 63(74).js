/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (!matrix.length) {
        return false
    }

    const rowLength = matrix.length
    const colLength = matrix[0].length
    let left = 0
    let right = rowLength * colLength - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const row = Math.floor(mid / colLength)
        const col = mid % colLength

        if (matrix[row][col] === target) {
            return true
        } else if (matrix[row][col] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return false
};