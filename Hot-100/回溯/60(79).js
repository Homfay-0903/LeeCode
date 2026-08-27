/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const m = board.length
    const n = board[0].length
    const wordLen = word.length

    function backTrack(x, y, idx) {
        if (idx === wordLen) {
            return true
        }

        if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== word[idx]) {
            return
        }

        const curChar = board[x][y]
        board[x][y] = '*'

        const isFound = backTrack(x - 1, y, idx + 1) ||
            backTrack(x + 1, y, idx + 1) ||
            backTrack(x, y - 1, idx + 1) ||
            backTrack(x, y + 1, idx + 1)

        board[x][y] = curChar

        return isFound
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (backTrack(i, j, 0)) {
                return true
            }
        }
    }

    return false
};