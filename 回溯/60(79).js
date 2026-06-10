/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const rowLength = board.length
    const colLength = board[0].length

    const dfs = (x, y, index) => {
        if (x < 0 || x >= rowLength || y < 0 || y >= colLength || board[x][y] !== word[index]) {
            return false
        }
        if (index + 1 === word.length) {
            return true
        }

        const curChar = board[x][y]
        board[x][y] = '*'

        const isFound = dfs(x - 1, y, index + 1) || dfs(x + 1, y, index + 1)
            || dfs(x, y - 1, index + 1) || dfs(x, y + 1, index + 1)

        board[x][y] = curChar

        return isFound
    }

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (dfs(i, j, 0)) {
                return true
            }
        }
    }

    return false
};