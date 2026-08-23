/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const m = matrix.length, n = matrix[0].length
    let rowIdx = 0, colIdx = n - 1

    while (rowIdx < m && colIdx >= 0) {
        if (matrix[rowIdx][colIdx] === target) {
            return true
        } else if (matrix[rowIdx][colIdx] < target) {
            rowIdx++
        } else if (matrix[rowIdx][colIdx] > target) {
            colIdx--
        }
    }

    return false
};