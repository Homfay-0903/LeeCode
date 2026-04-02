/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    if (!n) {
        return []
    }

    const results = []
    const cols = new Set()
    const rowAddCol = new Set()
    const rowSubCol = new Set()

    const backTrack = (curRow, path) => {
        if (curRow === n) {
            const res = path.map(p => '.'.repeat(p) + 'Q' + '.'.repeat(n - 1 - p))
            results.push([...res])
            return
        }

        for (let i = 0; i < n; i++) {
            if (cols.has(i) || rowAddCol.has(curRow + i) || rowSubCol.has(curRow - i)) {
                continue
            }

            cols.add(i)
            rowAddCol.add(curRow + i)
            rowSubCol.add(curRow - i)
            path.push(i)

            backTrack(curRow + 1, path)

            cols.delete(i)
            rowAddCol.delete(curRow + i)
            rowSubCol.delete(curRow - i)
            path.pop()
        }
    }

    backTrack(0, [])

    return results
};