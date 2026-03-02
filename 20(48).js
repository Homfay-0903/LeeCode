/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const len = matrix.length

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for (let i = 0; i < len; i++) {
        let left = 0
        let right = len - 1
        while (left < right) {
            [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]]
            left++
            right--
        }
    }
};