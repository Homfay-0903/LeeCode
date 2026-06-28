/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rows = new Array(9).fill(null).map(() => new Array(9).fill(false))
    const cols = new Array(9).fill(null).map(() => new Array(9).fill(false))
    const boxes = new Array(3).fill(null).map(() => new Array(3).fill(null).map(() => new Array(9).fill(false)))

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const curChar = board[i][j]

            if (curChar === '.') {
                continue
            }

            const curNum = curChar.charCodeAt(0) - 'a'.charCodeAt(0)
            const boxRow = Math.floor(i / 3)
            const boxCol = Math.floor(j / 3)

            if (rows[i][curNum] || cols[j][curNum] || boxes[boxRow][boxCol][curNum]) {
                return false
            }

            rows[i][curNum] = true
            cols[j][curNum] = true
            boxes[boxRow][boxCol][curNum] = true
        }
    }

    return true
};