/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const rowLen = matrix.length
    const colLen = matrix[0].length

    let left = 0
    let right = rowLen * colLen - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const curRow = Math.floor(mid / colLen)
        const curCol = mid % colLen

        if (matrix[curRow][curCol] === target) {
            return true
        } else if (matrix[curRow][curCol] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return false
};