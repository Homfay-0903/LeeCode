/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const m = matrix.length
    const n = matrix[0].length
    let left = 0, right = m * n - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const rowIdx = Math.floor(mid / n)
        const colIdx = mid % n

        if (matrix[rowIdx][colIdx] === target) {
            return true
        } else if (matrix[rowIdx][colIdx] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return false
};