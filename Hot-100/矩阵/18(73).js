/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const rowLen = matrix.length
    const colLen = matrix[0].length
    let rowHasZero = false
    let colHasZero = false

    for (let i = 0; i < rowLen; i++) {
        if (!matrix[i][0]) {
            colHasZero = true
        }
    }
    for (let i = 0; i < colLen; i++) {
        if (!matrix[0][i]) {
            rowHasZero = true
        }
    }

    for (let i = 1; i < rowLen; i++) {
        for (let j = 1; j < colLen; j++) {
            if (!matrix[i][j]) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    for (let i = 1; i < rowLen; i++) {
        if (!matrix[i][0]) {
            for (let j = 1; j < colLen; j++) {
                matrix[i][j] = 0
            }
        }
    }
    for (let i = 1; i < colLen; i++) {
        if (!matrix[0][i]) {
            for (let j = 1; j < rowLen; j++) {
                matrix[j][i] = 0
            }
        }
    }

    if (rowHasZero) {
        for (let i = 0; i < colLen; i++) {
            matrix[0][i] = 0
        }
    }
    if (colHasZero) {
        for (let i = 0; i < rowLen; i++) {
            matrix[i][0] = 0
        }
    }
};