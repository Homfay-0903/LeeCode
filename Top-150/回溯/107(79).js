/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const m = board.length
    const n = board[0].length

    const dfs = (x, y, index) => {
        if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== word[index]) {
            return false
        }

        if (index + 1 === word.length) {
            return true
        }

        const curChar = board[x][y]
        board[x][y] = '*'

        const isFound = dfs(x - 1, y, index + 1) || dfs(x + 1, y, index + 1) ||
            dfs(x, y - 1, index + 1) || dfs(x, y + 1, index + 1)

        board[x][y] = curChar

        return isFound
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) {
                return true
            }
        }
    }

    return false
};