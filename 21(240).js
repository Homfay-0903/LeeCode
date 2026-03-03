/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (!matrix.length || !matrix[0].length) {
        return false
    }

    let rowLen = matrix.length
    let colLen = matrix[0].length
    let row = 0
    let col = colLen - 1

    while (row < rowLen && col >= 0) {
        if (matrix[row][col] === target) {
            return true
        } else if (matrix[row][col] > target) {
            col--
        } else {
            row++
        }
    }

    return false
};
