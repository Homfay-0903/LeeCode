/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const res = [[1]]

    for (let i = 1; i < numRows; i++) {
        const preRow = res[res.length - 1]
        const curRow = [1]

        for (let j = 1; j < i; j++) {
            curRow[j] = preRow[j] + preRow[j - 1]
        }

        curRow.push(1)
        res.push(curRow)
    }

    return res
};