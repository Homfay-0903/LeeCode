/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const res = []
    const hasCol = new Set()
    const rowSubCol = new Set()
    const rowAddCol = new Set()

    function backTrack(curRow, path) {
        if (curRow === n) {
            res.push(path.map((idx) => '.'.repeat(idx) + 'Q' + '.'.repeat(n - idx - 1)))
            return
        }

        for (let curCol = 0; curCol < n; curCol++) {
            if (hasCol.has(curCol) || rowSubCol.has(curRow - curCol) || rowAddCol.has(curRow + curCol)) {
                continue
            }

            hasCol.add(curCol)
            rowSubCol.add(curRow - curCol)
            rowAddCol.add(curRow + curCol)
            path.push(curCol)

            backTrack(curRow + 1, path)

            hasCol.delete(curCol)
            rowSubCol.delete(curRow - curCol)
            rowAddCol.delete(curRow + curCol)
            path.pop()
        }
    }

    backTrack(0, [])

    return res
};