/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const res = []

    if (!numRows) {
        return res
    } else {
        res.push([1])
    }

    for (let i = 1; i < numRows; i++) {
        const preRows = res[i - 1]
        const curRows = [1]

        for (let j = 1; j < i; j++) {
            curRows.push(preRows[j - 1] + preRows[j])
        }

        curRows.push(1)
        res.push(curRows)
    }

    return res
};