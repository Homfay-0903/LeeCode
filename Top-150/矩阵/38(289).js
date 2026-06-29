/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    const m = board.length
    const n = board[0].length
    const diretions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ]

    const countLiveNeighbors = (x, y) => {
        let liveCount = 0

        for (const [dx, dy] of diretions) {
            const newX = x + dx
            const newY = y + dy

            if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
                if (board[newX][newY] === 1 || board[newX][newY] === 2) {
                    liveCount++
                }
            }
        }

        return liveCount
    }

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            const curLiveCount = countLiveNeighbors(row, col)

            if (board[row][col] === 1) {
                if (curLiveCount > 3 || curLiveCount < 2) {
                    board[row][col] = 2
                }
            } else {
                if (curLiveCount === 3) {
                    board[row][col] = 3
                }
            }
        }
    }

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (board[row][col] === 2) {
                board[row][col] = 0
            } else if (board[row][col] === 3) {
                board[row][col] = 1
            }
        }
    }
};