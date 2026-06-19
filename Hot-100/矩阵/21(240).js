/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const rowLen = matrix.length
    const colLen = matrix[0].length
    let curRow = 0, curCol = colLen - 1

    while (curRow < rowLen && curCol >= 0) {
        const curNum = matrix[curRow][curCol]

        if (curNum === target) {
            return true
        } else if (curNum > target) {
            curCol--
        } else {
            curRow++
        }
    }

    return false
};