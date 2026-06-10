/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const res = []
    const hasCol = new Set()
    const rowSubCol = new Set()
    const rowAddCol = new Set()

    const backTrack = (curRow, curRes) => {
        if (curRow === n) {
            res.push(curRes.map(colIdx => '.'.repeat(colIdx) + 'Q' + '.'.repeat(n - colIdx - 1)))
            return
        }

        for (let curCol = 0; curCol < n; curCol++) {
            if (hasCol.has(curCol) || rowAddCol.has(curRow + curCol) || rowSubCol.has(curRow - curCol)) {
                continue
            }

            hasCol.add(curCol)
            rowAddCol.add(curRow + curCol)
            rowSubCol.add(curRow - curCol)
            curRes.push(curCol)

            backTrack(curRow + 1, curRes)

            hasCol.delete(curCol)
            rowAddCol.delete(curRow + curCol)
            rowSubCol.delete(curRow - curCol)
            curRes.pop()
        }
    }

    backTrack(0, [])

    return res
};