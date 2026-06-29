/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const m = matrix.length
    const n = matrix[0].length

    let rowHasZero = false, colHasZero = false

    for (let i = 0; i < n; i++) {
        if (!matrix[0][i]) {
            rowHasZero = true
        }
    }
    for (let i = 0; i < m; i++) {
        if (!matrix[i][0]) {
            colHasZero = true
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (!matrix[i][j]) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    for (let i = 1; i < n; i++) {
        if (!matrix[0][i]) {
            for (let j = 1; j < m; j++) {
                matrix[j][i] = 0
            }
        }
    }
    for (let i = 1; i < m; i++) {
        if (!matrix[i][0]) {
            for (let j = 1; j < n; j++) {
                matrix[i][j] = 0
            }
        }
    }

    if (rowHasZero) {
        for (let i = 0; i < n; i++) {
            matrix[0][i] = 0
        }
    }
    if (colHasZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0
        }
    }
};