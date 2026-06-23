/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1 || s.length < numRows) {
        return s
    }

    let goingDown = false
    let curRow = 0

    const res = new Array(numRows).fill('')

    for (const char of s) {
        res[curRow] += char

        if (curRow === 0 || curRow === numRows - 1) {
            goingDown = !goingDown
        }

        curRow += goingDown ? 1 : -1
    }

    return res.join('')
};