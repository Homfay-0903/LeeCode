/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let res = 0
    const hasCol = new Set()
    const rowSubCol = new Set()
    const rowAddCol = new Set()

    const backtrack = (curRow) => {
        if (curRow === n) {
            res++
            return
        }

        for (let curCol = 0; curCol < n; curCol++) {
            if (hasCol.has(curCol) || rowSubCol.has(curRow - curCol) || rowAddCol.has(curRow + curCol)) {
                continue
            }

            hasCol.add(curCol)
            rowSubCol.add(curRow - curCol)
            rowAddCol.add(curRow + curCol)

            backtrack(curRow + 1)

            hasCol.delete(curCol)
            rowSubCol.delete(curRow - curCol)
            rowAddCol.delete(curRow + curCol)
        }
    }

    backtrack(0)

    return res
};