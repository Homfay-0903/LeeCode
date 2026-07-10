/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const m = board.length
    const n = board[0].length
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    const bfs = (x, y) => {
        const queue = [[x, y]]

        board[x][y] = '*'

        while (queue.length) {
            const [x, y] = queue.shift()
            for (const [dx, dy] of dirs) {
                const newX = x + dx
                const newY = y + dy

                if (newX >= 0 && newX < m && newY >= 0 && newY < n && board[newX][newY] === 'O') {
                    board[newX][newY] = '*'
                    queue.push([newX, newY])
                }
            }
        }
    }

    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O') {
            bfs(i, 0)
        }
        if (board[i][n - 1] === 'O') {
            bfs(i, n - 1)
        }
    }
    for (let i = 0; i < n; i++) {
        if (board[0][i] === 'O') {
            bfs(0, i)
        }
        if (board[m - 1][i] === 'O') {
            bfs(m - 1, i)
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === '*') {
                board[i][j] = 'O'
            } else if (board[i][j] === 'O') {
                board[i][j] = 'X'
            }
        }
    }
};