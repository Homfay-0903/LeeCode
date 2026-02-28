/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rowLen = matrix.length
    if (!rowLen) {
        return
    }
    const colLen = matrix[0].length

    let hasrowZero = false
    let hascolZero = false

    for (let i = 0; i < rowLen; i++) {
        if (matrix[i][0] === 0) {
            hascolZero = true
            break
        }
    }

    for (let i = 0; i < colLen; i++) {
        if (matrix[0][i] === 0) {
            hasrowZero = true
            break
        }
    }

    for (let i = 1; i < rowLen; i++) {
        for (let j = 1; j < colLen; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    for (let i = 1; i < rowLen; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 1; j < colLen; j++) {
                matrix[i][j] = 0
            }
        }
    }

    for (let i = 1; i < colLen; i++) {
        if (matrix[0][i] === 0) {
            for (let j = 1; j < rowLen; j++) {
                matrix[j][i] = 0
            }
        }
    }

    if (hasrowZero) {
        for (let i = 0; i < colLen; i++) {
            matrix[0][i] = 0
        }
    }

    if (hascolZero) {
        for (let i = 0; i < rowLen; i++) {
            matrix[i][0] = 0
        }
    }
    
};